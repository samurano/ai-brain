import type { UTMParams } from './types';

const UTM_KEYS: Array<keyof UTMParams> = [
  'utm_source',
  'utm_campaign',
  'utm_content',
  'utm_term',
];

export function getUTMParams(search: string = window.location.search): UTMParams {
  const params = new URLSearchParams(search);

  return UTM_KEYS.reduce(
    (acc, key) => {
      acc[key] = params.get(key) ?? '';
      return acc;
    },
    {
      utm_source: '',
      utm_campaign: '',
      utm_content: '',
      utm_term: '',
    } as UTMParams,
  );
}
