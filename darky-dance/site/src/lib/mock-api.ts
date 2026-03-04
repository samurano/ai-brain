import type { LeadPayload } from './types';

export type SubmitResponse = {
  ok: true;
  lead_id: string;
};

export async function submitLeadMock(payload: LeadPayload): Promise<SubmitResponse> {
  await new Promise((resolve) => setTimeout(resolve, 450));

  const leadId = `lead_${Date.now().toString(36)}`;
  console.debug('[mock-submit]', { leadId, payload });

  return {
    ok: true,
    lead_id: leadId,
  };
}
