import { useMemo, useState } from 'react';
import clsx from 'clsx';
import { getUTMParams } from '@/lib/utm';
import { resolveLandingVariant } from '@/lib/variant';
import { leadSchema } from '@/lib/lead-schema';
import { submitLead } from '@/lib/submit';
import { track } from '@/lib/analytics';
import { getRuntimeConfig } from '@/lib/runtime-config';
import type { LandingVariant, UTMParams } from '@/lib/types';
import { TextField } from '@/components/ui/TextField';
import { PhoneField } from '@/components/ui/PhoneField';
import { CheckboxField } from '@/components/ui/CheckboxField';
import { FormMessage } from '@/components/ui/FormMessage';
import { SubmitButton } from '@/components/ui/SubmitButton';

type FormState = {
  name: string;
  phone: string;
  telegram: string;
  consent_personal_data: boolean;
};

const initialState: FormState = {
  name: '',
  phone: '',
  telegram: '',
  consent_personal_data: false,
};

type LeadFormMode = 'full' | 'compact';

type Props = {
  mode?: LeadFormMode;
  formId?: string;
  source?: 'hero' | 'section';
  className?: string;
};

export function LeadForm({
  mode = 'full',
  formId = 'lead-form',
  source = 'section',
  className,
}: Props) {
  const telegramUsername = getRuntimeConfig().telegramUsername.replace('@', '');
  const isCompact = mode === 'compact';

  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<{ type: 'idle' | 'success' | 'error'; text: string }>({
    type: 'idle',
    text: '',
  });
  const [loading, setLoading] = useState(false);
  const [started, setStarted] = useState(false);

  const trackingContext = useMemo<{ landing_variant: LandingVariant } & UTMParams>(() => {
    if (typeof window === 'undefined') {
      return {
        landing_variant: 'pair_vk_cold' as LandingVariant,
        utm_source: '',
        utm_campaign: '',
        utm_content: '',
        utm_term: '',
      };
    }

    return {
      landing_variant: resolveLandingVariant(),
      ...getUTMParams(),
    };
  }, []);

  function handleStart() {
    if (!started) {
      setStarted(true);
      track('lp_form_start', { source, mode });
    }
  }

  async function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    track('lp_form_submit', { source, mode });
    setErrors({});
    setStatus({ type: 'idle', text: '' });

    const parsed = leadSchema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;
      setErrors({
        name: fieldErrors.name?.[0] ?? '',
        phone: fieldErrors.phone?.[0] ?? '',
        consent_personal_data: fieldErrors.consent_personal_data?.[0] ?? 'Нужно согласие',
      });
      setStatus({ type: 'error', text: isCompact ? 'Проверьте поля.' : 'Проверьте поля формы.' });
      track('lp_form_error', { source, mode, reason: 'validation' });
      return;
    }

    setLoading(true);

    try {
      const payload = {
        name: parsed.data.name,
        phone: parsed.data.phone,
        telegram: parsed.data.telegram || undefined,
        consent_personal_data: true as const,
        ...trackingContext,
        direction: 'pair' as const,
        page_url: window.location.href,
        referrer: document.referrer,
        created_at: new Date().toISOString(),
      };

      const response = await submitLead(payload);
      setStatus({ type: 'success', text: 'Заявка принята. Перенаправляем…' });
      track('lp_form_success', { source, mode, lead_id: response.lead_id });

      const params = new URLSearchParams({
        lead_id: response.lead_id,
        landing_variant: trackingContext.landing_variant,
      });

      window.location.assign(`/thanks/?${params.toString()}`);
    } catch (error) {
      setStatus({ type: 'error', text: 'Не удалось отправить заявку. Попробуйте ещё раз.' });
      track('lp_form_error', { source, mode, reason: 'submit_exception', message: String(error) });
    } finally {
      setLoading(false);
    }
  }

  const heading = isCompact ? 'Оставьте контакты' : 'Запишитесь на пробное и получите ближайший слот';
  const subhead = isCompact
    ? ''
    : 'Оставьте контакты, и мы свяжемся с вами в рабочее время, чтобы подтвердить удобную дату.';
  const nameLabel = isCompact ? 'Имя' : 'Ваше имя';
  const telegramLabel = 'Telegram (необязательно)';
  const consentLabel = isCompact ? (
    <>
      Согласен(а) на обработку персональных данных и принимаю <a href="/privacy/">политику ПД</a>.
    </>
  ) : (
    <>
      Нажимая кнопку, вы соглашаетесь на обработку персональных данных и принимаете{' '}
      <a href="/privacy/">политику ПД</a>.
    </>
  );
  const fallbackText = isCompact ? 'Или сразу в Telegram' : 'Если удобнее, напишите сразу в Telegram';

  return (
    <form
      id={formId}
      className={clsx('lead-form surface', isCompact ? 'lead-form--compact' : 'lead-form--full', className)}
      onSubmit={handleSubmit}
      onFocus={handleStart}
    >
      <h2 className={clsx(isCompact ? 'h3' : 'h2', 'lead-form__title')} style={{ marginBottom: 0 }}>
        {heading}
      </h2>

      {subhead ? (
        <p className="muted lead-form__subhead" style={{ margin: 0 }}>
          {subhead}
        </p>
      ) : null}

      <TextField
        id={`${formId}-name`}
        name="name"
        label={nameLabel}
        value={form.name}
        onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
        error={errors.name}
        autoComplete="name"
        required
      />

      <PhoneField
        id={`${formId}-phone`}
        name="phone"
        value={form.phone}
        onChange={(phone) => setForm((prev) => ({ ...prev, phone }))}
        error={errors.phone}
      />

      <TextField
        id={`${formId}-telegram`}
        name="telegram"
        label={telegramLabel}
        value={form.telegram}
        onChange={(event) => setForm((prev) => ({ ...prev, telegram: event.target.value }))}
        autoComplete="off"
      />

      <CheckboxField
        id={`${formId}-consent_personal_data`}
        name="consent_personal_data"
        checked={form.consent_personal_data}
        onChange={(event) => setForm((prev) => ({ ...prev, consent_personal_data: event.target.checked }))}
        label={consentLabel}
        error={errors.consent_personal_data}
      />

      <input type="hidden" name="utm_source" value={trackingContext.utm_source} readOnly />
      <input type="hidden" name="utm_campaign" value={trackingContext.utm_campaign} readOnly />
      <input type="hidden" name="utm_content" value={trackingContext.utm_content} readOnly />
      <input type="hidden" name="utm_term" value={trackingContext.utm_term} readOnly />
      <input type="hidden" name="landing_variant" value={trackingContext.landing_variant} readOnly />
      <input type="hidden" name="direction" value="pair" readOnly />

      <SubmitButton label="Записаться на пробное" loading={loading} />
      <FormMessage type={status.type} text={status.text} />

      {isCompact ? (
        <>
          <p className="muted lead-form__meta" style={{ margin: 0 }}>
            Свяжемся и подберём ближайшую дату.
          </p>
          <p className="muted lead-form__meta" style={{ margin: 0 }}>
            {fallbackText}:{' '}
            <a
              className="js-telegram-link"
              href={`https://t.me/${telegramUsername}`}
              target="_blank"
              rel="noreferrer"
              onClick={() => track('lp_telegram_click', { source: 'hero_form' })}
            >
              @{telegramUsername}
            </a>
          </p>
        </>
      ) : (
        <>
          <p className="muted lead-form__meta" style={{ margin: 0 }}>
            {fallbackText}:{' '}
            <a
              className="js-telegram-link"
              href={`https://t.me/${telegramUsername}`}
              target="_blank"
              rel="noreferrer"
              onClick={() => track('lp_telegram_click', { source: 'section_form' })}
            >
              @{telegramUsername}
            </a>
          </p>
          <p className="muted lead-form__meta" style={{ margin: 0 }}>
            Обычно отвечаем в рабочее время до 30 минут.
          </p>
        </>
      )}
    </form>
  );
}
