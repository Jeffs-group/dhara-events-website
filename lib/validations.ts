import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, { message: 'Name must be at least 2 characters.' }),
  company: z.string().trim().optional(),
  email: z.string().trim().email({ message: 'Please enter a valid email address.' }),
  phone: z
    .string()
    .trim()
    .min(10, { message: 'Phone number must be at least 10 digits.' })
    .max(16, { message: 'Phone number must be valid.' }),
  eventType: z.enum([
    'Sports Event',
    'Corporate Event',
    'Wedding & Social',
    'Entertainment & Live',
    'Other',
  ] as const, {
    message: 'Please select an event type.',
  }),
  eventDate: z.string().optional(),
  message: z.string().trim().min(10, { message: 'Message must be at least 10 characters.' }),
  _honey: z.string().max(0, { message: 'Spam detected.' }).optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
