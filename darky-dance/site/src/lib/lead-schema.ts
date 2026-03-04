import { z } from 'zod';

export const leadSchema = z.object({
  name: z.string().trim().min(2, 'Укажите имя'),
  phone: z
    .string()
    .trim()
    .min(10, 'Укажите телефон')
    .regex(/[0-9+()\-\s]{10,}/, 'Проверьте формат телефона'),
  telegram: z.string().trim().optional(),
  consent_personal_data: z.literal(true),
});

export type LeadFormValues = z.infer<typeof leadSchema>;
