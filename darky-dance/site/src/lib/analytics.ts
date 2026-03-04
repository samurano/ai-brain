import type { AnalyticsEventName } from './types';
import { getUTMParams } from './utm';
import { resolveLandingVariant } from './variant';
import { getRuntimeConfig } from './runtime-config';

export function track(eventName: AnalyticsEventName, payload: Record<string, unknown> = {}): void {
  if (typeof window === 'undefined') return;

  const utm = getUTMParams();
  const landingVariant = resolveLandingVariant();
  const eventPayload = {
    ...utm,
    landing_variant: landingVariant,
    ...payload,
  };

  const config = getRuntimeConfig();
  if (typeof window.ym === 'function' && config.metrikaCounterId) {
    window.ym(Number(config.metrikaCounterId), 'reachGoal', eventName, eventPayload);
  } else {
    console.debug('[analytics]', eventName, eventPayload);
  }
}
