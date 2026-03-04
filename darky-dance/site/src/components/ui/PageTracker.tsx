import { useEffect } from 'react';
import type { AnalyticsEventName } from '@/lib/types';
import { track } from '@/lib/analytics';

type Props = {
  eventName: AnalyticsEventName;
};

export function PageTracker({ eventName }: Props) {
  useEffect(() => {
    track(eventName);
  }, [eventName]);

  return null;
}
