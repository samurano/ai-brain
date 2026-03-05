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
    <div className="hero-content">
      <span className="hero-source-badge">D’Arky Dance • Новосибирск</span>
      <h1 className="h1 hero-title" style={{ marginTop: '1rem' }}>
        {content.h1}
      </h1>
      <p className="hero-subhead muted" style={{ marginTop: '0.75rem' }}>
        {content.subhead}
      </p>
      <ul className="hero-bullets" style={{ marginTop: '1rem' }}>
        {content.bullets.map((item) => (
          <li key={item}>
            {item}
          </li>
        ))}
      </ul>

      <div className="hero-actions">
        <a
          href="#lead-form"
          className="btn btn-primary hero-main-cta js-main-cta"
          onClick={() => track('lp_hero_cta_click', { source: 'hero' })}
        >
          {ctaMain}
        </a>
      </div>

      <div className="hero-chip-row">
        <span className="hero-chip">Без опыта</span>
        <span className="hero-chip">Первый шаг без стресса</span>
      </div>

      <p className="hero-microtrust muted" style={{ marginTop: '0.65rem', marginBottom: 0 }}>
        {microtrustLine}
      </p>
    </div>
  );
}
