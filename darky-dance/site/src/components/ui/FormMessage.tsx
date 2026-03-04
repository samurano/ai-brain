type Props = {
  type: 'idle' | 'success' | 'error';
  text: string;
};

export function FormMessage({ type, text }: Props) {
  if (type === 'idle' || !text) return null;

  return (
    <p
      style={{
        margin: 0,
        color: type === 'success' ? '#8bf0c6' : '#ff9cb6',
      }}
      role={type === 'error' ? 'alert' : 'status'}
    >
      {text}
    </p>
  );
}
