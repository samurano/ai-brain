import { TextField } from './TextField';

type Props = {
  error?: string;
  value: string;
  onChange: (value: string) => void;
};

export function PhoneField({ error, value, onChange }: Props) {
  return (
    <TextField
      id="phone"
      name="phone"
      label="Телефон"
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
