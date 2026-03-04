import PrimaryCTA from '@/components/ui/PrimaryCTA.astro';

export default {
  title: 'UI/PrimaryCTA',
  component: PrimaryCTA,
  args: {
    href: '#',
    label: 'Записаться на пробное',
  },
};

export const Default = {};

export const FocusState = {
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const link = canvasElement.querySelector('a');
    if (link) link.focus();
  },
};
