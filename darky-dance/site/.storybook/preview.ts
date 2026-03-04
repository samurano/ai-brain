import '../src/styles/global.css';

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'darky',
      values: [
        { name: 'darky', value: '#0b121a' },
      ],
    },
  },
};

export default preview;
