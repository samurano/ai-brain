import type { LeadPayload } from './types';
import { getRuntimeConfig } from './runtime-config';
import { submitLeadMock } from './mock-api';

export async function submitLead(payload: LeadPayload): Promise<{ ok: true; lead_id: string }> {
  const config = getRuntimeConfig();

  if (config.submitMode === 'api' && config.submitEndpoint) {
    const response = await fetch(config.submitEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error('submit_failed');
    }

    const data = (await response.json()) as { lead_id?: string };

    return {
      ok: true,
      lead_id: data.lead_id ?? `lead_${Date.now().toString(36)}`,
    };
  }

  return submitLeadMock(payload);
}
