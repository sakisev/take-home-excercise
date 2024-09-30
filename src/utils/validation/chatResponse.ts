import * as GeneralZod from 'zod';

export const chatResponseSchema = GeneralZod.object({
    title: GeneralZod.string().min(1),
    url: GeneralZod.string().url(),
    match: GeneralZod.boolean(),
});
