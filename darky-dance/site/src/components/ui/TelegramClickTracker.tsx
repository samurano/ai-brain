import { useEffect } from 'react';
import { track } from '@/lib/analytics';

type Props = {
  source: string;
  selector?: string;
};

export function TelegramClickTracker({ source, selector = '.js-telegram-link' }: Props) {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll(selector));
    const listeners = nodes.map((node) => {
      const handler = () => {
        track('lp_telegram_click', { source });
      };

      node.addEventListener('click', handler);
      return { node, handler };
    });

    return () => {
      listeners.forEach(({ node, handler }) => {
        node.removeEventListener('click', handler);
      });
    };
  }, [selector, source]);

  return null;
}
