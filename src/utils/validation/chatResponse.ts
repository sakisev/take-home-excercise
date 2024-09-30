import * as zod from 'zod';

export const chatResponseSchema = zod.object({
    title: zod.string().min(1),
    url: zod.string().url(),
    match: zod.boolean()
});
