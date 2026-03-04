import type { LandingVariant } from './types';
import { getUTMParams } from './utm';

export const DEFAULT_VARIANT: LandingVariant = 'pair_vk_cold';

export function resolveLandingVariant(search: string = window.location.search): LandingVariant {
  const params = new URLSearchParams(search);
  const explicitVariant = params.get('landing_variant');

  if (explicitVariant === 'pair_vk_cold' || explicitVariant === 'pair_direct_intent') {
    return explicitVariant;
  }

  const { utm_source } = getUTMParams(search);
  const source = utm_source.toLowerCase();

  if (source.includes('vk') || source.includes('vkontakte')) {
    return 'pair_vk_cold';
  }

  if (source.includes('yandex') || source.includes('direct')) {
    return 'pair_direct_intent';
  }

  return DEFAULT_VARIANT;
}
