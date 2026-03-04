import { useMemo, useState } from 'react';
import { heroByVariant } from '@/content/landing';
import { track } from '@/lib/analytics';
import { resolveLandingVariant } from '@/lib/variant';
import type { LandingVariant } from '@/lib/types';

type Props = {
  ctaMain: string;
  microtrustLine: string;
};

export function HeroVariant({ ctaMain, microtrustLine }: Props) {
  const [variant] = useState<LandingVariant>(() => {
    if (typeof window === 'undefined') return 'pair_vk_cold';
    return resolveLandingVariant();
  });

  const content = useMemo(() => heroByVariant[variant], [variant]);

  return (
    <div className="surface" style={{ padding: '1.5rem' }}>
      <span className="eyebrow">Пробное 800 ₽ / 400 ₽ при предоплате</span>
      <h1 className="h1" style={{ marginTop: '1rem' }}>
        {content.h1}
      </h1>
      <p className="muted" style={{ marginTop: '0.75rem' }}>
        {content.subhead}
      </p>
      <ul className="list-clean" style={{ marginTop: '1rem', display: 'grid', gap: '0.5rem' }}>
        {content.bullets.map((item) => (
          <li key={item} className="card">
            {item}
          </li>
        ))}
      </ul>
      <a
        href="#lead-form"
        className="btn btn-primary js-main-cta"
        style={{ marginTop: '1rem' }}
        onClick={() => track('lp_hero_cta_click')}
      >
        {ctaMain}
      </a>
      <p className="muted" style={{ marginTop: '0.75rem', marginBottom: 0 }}>
        {microtrustLine}
      </p>
    </div>
  );
}
