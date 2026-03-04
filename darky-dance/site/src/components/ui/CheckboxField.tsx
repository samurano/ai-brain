import type { InputHTMLAttributes, ReactNode } from 'react';

type Props = {
  label: ReactNode;
  error?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>;

export function CheckboxField({ label, error, id, ...props }: Props) {
  const fieldId = id ?? props.name;

  return (
    <label htmlFor={fieldId} style={{ display: 'grid', gap: '0.35rem' }}>
      <span style={{ display: 'inline-flex', alignItems: 'flex-start', gap: '0.5rem' }}>
        <input id={fieldId} type="checkbox" {...props} style={{ marginTop: '0.2rem' }} />
        <span>{label}</span>
      </span>
      {error ? <span className="field-error">{error}</span> : null}
    </label>
  );
}
