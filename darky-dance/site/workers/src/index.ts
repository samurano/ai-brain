export interface Env {
  ENV: string;
}

type LeadPayload = {
  name: string;
  phone: string;
  telegram?: string;
  consent_personal_data: true;
  utm_source: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
  landing_variant: string;
  direction: 'pair';
  page_url: string;
  referrer: string;
  created_at: string;
};

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (request.method === 'GET' && url.pathname === '/health') {
      return Response.json({ ok: true, env: env.ENV });
    }

    if (request.method === 'POST' && url.pathname === '/api/lead') {
      const body = (await request.json()) as LeadPayload;

      // TODO: подключить валидацию и прод-интеграции (CRM / Telegram / таблицы).
      const leadId = `lead_${Date.now().toString(36)}`;
      return Response.json({ ok: true, lead_id: leadId, received: body.direction === 'pair' });
    }

    return new Response('Not found', { status: 404 });
  },
};
