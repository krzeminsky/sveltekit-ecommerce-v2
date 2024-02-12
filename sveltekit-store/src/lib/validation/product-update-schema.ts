import { z } from "zod";

export const productUpdateSchema = z.object({
    id: z.number(),
    name: z.string().min(1),
    categoryId: z.number(),
    materials: z.string().optional(),
    description: z.string().optional(),

    variants: z.array(z.object({
        id: z.number(),
        colorId: z.number(),
        stock: z.object({
            id: z.number(),
            sizeId: z.number(),
            amount: z.number()
        }),
        galleryMap: z.array(z.number())
    }))
});

export type ProductUpdateData = z.infer<typeof productUpdateSchema>;