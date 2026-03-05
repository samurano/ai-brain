import { TextField } from './TextField';

type Props = {
  id?: string;
  name?: string;
  label?: string;
  error?: string;
  value: string;
  onChange: (value: string) => void;
};

export function PhoneField({ id, name = 'phone', label = 'Телефон', error, value, onChange }: Props) {
  return (
    <TextField
      id={id ?? name}
      name={name}
      label={label}
      inputMode="tel"
      autoComplete="tel"
      placeholder="+7 (___) ___-__-__"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      error={error}
      required
    />
  );
}
