import { z } from 'zod';


export const pingSchema = z.object({
    massage: z.string().min(1),
});