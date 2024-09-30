import { OpenAlexWorkResponse } from '@/utils/types/openAlex.ts';

export interface GeneratedResponse {
    text: string;
    url?: string;
    oaResponse?: OpenAlexWorkResponse;
}
