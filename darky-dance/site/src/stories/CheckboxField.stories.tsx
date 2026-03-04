import { CheckboxField } from '@/components/ui/CheckboxField';

export default {
  title: 'UI/CheckboxField',
  component: CheckboxField,
  args: {
    name: 'consent',
    label: 'Согласен на обработку персональных данных',
    checked: true,
    onChange: () => {},
  },
};

export const Default = {};

export const Error = {
  args: {
    checked: false,
    error: 'Нужно согласие',
  },
};

export const FocusState = {
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const input = canvasElement.querySelector('input[type="checkbox"]') as HTMLInputElement | null;
    if (input) input.focus();
  },
};
