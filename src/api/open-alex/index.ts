import { OpenAlexWorkResponse } from '@/utils/types/openAlex.ts';
import axios from 'axios';

const fetchWorks = async (url: string): Promise<OpenAlexWorkResponse | null> => {
    try {
        const results = await axios.get<OpenAlexWorkResponse>(url);

        if (results.data) {
            return results.data;
        }

        return null;
    } catch (e: unknown) {
        console.error(e);
        return null;
    }
};

export default fetchWorks;
