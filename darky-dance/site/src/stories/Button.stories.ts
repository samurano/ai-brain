import Button from '@/components/ui/Button.astro';

export default {
  title: 'UI/Button',
  component: Button,
  args: {
    variant: 'primary',
  },
};

export const Default = {
  args: {
    label: 'Записаться',
  },
};

export const FocusState = {
  args: {
    label: 'Фокус',
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const button = canvasElement.querySelector('button');
    if (button) button.focus();
  },
};

export const Disabled = {
  args: {
    label: 'Недоступно',
    disabled: true,
  },
};
