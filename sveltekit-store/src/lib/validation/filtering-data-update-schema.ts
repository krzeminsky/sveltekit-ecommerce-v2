import { z } from "zod";

export const filteringDataUpdateSchema = z.object({
    colors: z.array(z.string().min(1)).optional(),
    materials: z.array(z.string().min(1)).optional(),
    categories: z.array(z.string().min(1)).optional(),
    sizes: z.array(z.string().min(1)).optional()
});

export type FilteringDataUpdateData = z.infer<typeof filteringDataUpdateSchema>;