import { useMemo, useState } from 'react';
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

export function LeadForm() {
  const telegramUsername = getRuntimeConfig().telegramUsername;
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
      track('lp_form_start');
    }
  }

  async function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    track('lp_form_submit');
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
      setStatus({ type: 'error', text: 'Проверьте поля формы.' });
      track('lp_form_error', { reason: 'validation' });
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
      track('lp_form_success', { lead_id: response.lead_id });

      const params = new URLSearchParams({
        lead_id: response.lead_id,
        landing_variant: trackingContext.landing_variant,
      });

      window.location.assign(`/thanks/?${params.toString()}`);
    } catch (error) {
      setStatus({ type: 'error', text: 'Не удалось отправить заявку. Попробуйте ещё раз.' });
      track('lp_form_error', { reason: 'submit_exception', message: String(error) });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form id="lead-form" className="surface" style={{ padding: '1.25rem', display: 'grid', gap: '0.9rem' }} onSubmit={handleSubmit} onFocus={handleStart}>
      <h2 className="h2" style={{ marginBottom: 0 }}>
        Запишитесь на пробное и получите ближайший слот
      </h2>
      <p className="muted" style={{ margin: 0 }}>
        Оставьте контакты, и мы свяжемся с вами в рабочее время, чтобы подтвердить удобную дату.
      </p>

      <TextField
        id="name"
        name="name"
        label="Ваше имя"
        value={form.name}
        onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
        error={errors.name}
        autoComplete="name"
        required
      />

      <PhoneField
        value={form.phone}
        onChange={(phone) => setForm((prev) => ({ ...prev, phone }))}
        error={errors.phone}
      />

      <TextField
        id="telegram"
        name="telegram"
        label="Telegram (необязательно)"
        value={form.telegram}
        onChange={(event) => setForm((prev) => ({ ...prev, telegram: event.target.value }))}
        autoComplete="off"
      />

      <CheckboxField
        id="consent_personal_data"
        name="consent_personal_data"
        checked={form.consent_personal_data}
        onChange={(event) => setForm((prev) => ({ ...prev, consent_personal_data: event.target.checked }))}
        label={
          <>
            Нажимая кнопку, вы соглашаетесь на обработку персональных данных и принимаете{' '}
            <a href="/privacy/">политику ПД</a>.
          </>
        }
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

      <p className="muted" style={{ margin: 0 }}>
        Если удобнее, напишите сразу в Telegram:{' '}
        <a
          className="js-telegram-link"
          href={`https://t.me/${telegramUsername.replace('@', '')}`}
          target="_blank"
          rel="noreferrer"
          onClick={() => track('lp_telegram_click', { source: 'form' })}
        >
          @{telegramUsername.replace('@', '')}
        </a>
      </p>
      <p className="muted" style={{ margin: 0 }}>
        Обычно отвечаем в рабочее время до 30 минут.
      </p>
    </form>
  );
}
