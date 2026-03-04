import type { InputHTMLAttributes } from 'react';

type Props = {
  label: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function TextField({ label, error, id, ...props }: Props) {
  const fieldId = id ?? props.name;

  return (
    <label className="field" htmlFor={fieldId}>
      <span>{label}</span>
      <input id={fieldId} {...props} />
      {error ? <span className="field-error">{error}</span> : null}
    </label>
  );
}
