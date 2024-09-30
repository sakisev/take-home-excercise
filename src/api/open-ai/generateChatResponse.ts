import openAI from '@/api/open-ai';
import { GeneratedResponse } from '@/utils/types/generatedResponse';
import { chatResponseSchema } from '@/utils/validation/chatResponse.ts';
import OpenAI from 'openai';
import ChatCompletion = OpenAI.ChatCompletion;

const generateChatResponse = async (userInput: string): Promise<GeneratedResponse | null> => {
    const response: GeneratedResponse = {
        text: "Couldn't find any relevant sources with that input",
    };

    try {
        const chatResponse = await openAI.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: [
                {
                    role: 'system',
                    content:
                        'You are a helpful assistant that analyzes user input and returns a JSON object in the following strict format: \n' +
                        ' { title: "Here is what I found:", url: "https://api.openalex.org/works?filter=<filter_params>", match: true }' +
                        'Rules:\n' +
                        '1. If the user mentions a search term (e.g., "artificial intelligence"), include `default.search:<search_term>` in the filter parameters.\n' +
                        '2. If the user mentions a publication year (e.g, "after 2015"), include `publication_year:<publication_year>` in the filter parameters. (e.g "publication_year:>2015") \n' +
                        '3. If the user mentions citation count, include `cited_by_count:<cited_by_count>` in the filter parameters. cited_by_count must be an integer \n' +
                        '4. If the user mentions open access, include `is_oa:<is_oa>` in the filter parameters. is_oa is a boolean. \n' +
                        '5. If the user does NOT specify matching parameter, omit the parameter from the URL. \n' +
                        "6. If the user's prompt does not match any of the filters change the `title` to a generic error message and the value of `match` to false",
                },
                { role: 'user', content: userInput },
            ],
        });

        const parsedJson = isChatResponseValid(chatResponse);

        if (!parsedJson) {
            return response;
        }

        if (!parsedJson.match) {
            return {
                text: parsedJson.title,
            };
        }

        return {
            url: parsedJson.url,
            text: parsedJson.title,
        };
    } catch (e: unknown) {
        console.error(e);
        return null;
    }
};

const isChatResponseValid = (chatResponse: ChatCompletion) => {
    try {
        const message = chatResponse.choices[0].message.content;

        if (!message) {
            return;
        }
        const parsedJson = JSON.parse(message);

        return chatResponseSchema.parse(parsedJson);
    } catch (e: unknown) {
        console.error(e);
        return false;
    }
};

export default generateChatResponse;
