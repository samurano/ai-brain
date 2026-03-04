export type LandingVariant = 'pair_vk_cold' | 'pair_direct_intent';

export type UTMParams = {
  utm_source: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
};

export type LeadPayload = {
  name: string;
  phone: string;
  telegram?: string;
  consent_personal_data: true;
  utm_source: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
  landing_variant: LandingVariant;
  direction: 'pair';
  page_url: string;
  referrer: string;
  created_at: string;
};

export type AnalyticsEventName =
  | 'lp_view'
  | 'lp_hero_cta_click'
  | 'lp_form_start'
  | 'lp_form_submit'
  | 'lp_form_success'
  | 'lp_form_error'
  | 'lp_telegram_click'
  | 'lp_thanks_view';
