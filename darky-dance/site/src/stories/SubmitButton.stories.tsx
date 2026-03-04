import { SubmitButton } from '@/components/ui/SubmitButton';

export default {
  title: 'UI/SubmitButton',
  component: SubmitButton,
  args: {
    label: 'Записаться на пробное',
  },
};

export const Default = {};

export const LoadingDisabled = {
  args: {
    loading: true,
  },
};
