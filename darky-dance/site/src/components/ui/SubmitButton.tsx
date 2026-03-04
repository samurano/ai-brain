type Props = {
  label: string;
  loadingLabel?: string;
  loading?: boolean;
};

export function SubmitButton({ label, loadingLabel = 'Отправляем…', loading = false }: Props) {
  return (
    <button className="btn btn-primary" style={{ width: '100%' }} type="submit" disabled={loading}>
      {loading ? loadingLabel : label}
    </button>
  );
}
