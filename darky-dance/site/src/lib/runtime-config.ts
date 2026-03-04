export type RuntimeConfig = {
  submitMode: 'mock' | 'api';
  submitEndpoint: string;
  metrikaCounterId: string;
  telegramUsername: string;
  phoneDisplay: string;
  addressDisplay: string;
  metroDisplay: string;
  scheduleDisplay: string;
};

const defaults: RuntimeConfig = {
  submitMode: 'mock',
  submitEndpoint: '',
  metrikaCounterId: '',
  telegramUsername: 'darkystudio',
  phoneDisplay: '+7 995 892 72 96',
  addressDisplay: 'Фрунзе, 80',
  metroDisplay: 'Красный проспект',
  scheduleDisplay: 'пн/ср 21:00',
};

declare global {
  interface Window {
    LANDING_CONFIG?: Partial<RuntimeConfig>;
    ym?: (...args: unknown[]) => void;
  }
}

export function getRuntimeConfig(): RuntimeConfig {
  if (typeof window === 'undefined') {
    return defaults;
  }

  return {
    ...defaults,
    ...(window.LANDING_CONFIG ?? {}),
  };
}
