import { TextField } from '@/components/ui/TextField';

export default {
  title: 'UI/TextField',
  component: TextField,
  args: {
    label: 'Ваше имя',
    name: 'name',
    value: 'Анна',
    onChange: () => {},
  },
};

export const Default = {};

export const Error = {
  args: {
    error: 'Укажите имя',
  },
};

export const Disabled = {
  args: {
    disabled: true,
  },
};
