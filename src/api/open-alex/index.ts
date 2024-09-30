import useChatStore from '@/store';
import { OpenAlexWorkResponse } from '@/utils/types/openAlex.ts';
import { oaValidationSchema } from '@/utils/validation/openAlexResponse.ts';
import axios from 'axios';

const fetchWorks = async (url: string): Promise<boolean> => {
    try {
        const results = await axios.get<OpenAlexWorkResponse>(url);

        if (!results.data) {
            return false;
        }
        // const validatedData = validateResults(results.data);
        //
        // if (!validatedData) {
        //     return false;
        // }
        useChatStore.setState({ oaResponse: results.data });

        return true;
    } catch (e: unknown) {
        console.error(e);
        return false;
    }
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const validateResults = (data: OpenAlexWorkResponse) => {
    try {
        return oaValidationSchema.parse(data);
    } catch (e: unknown) {
        console.error(e);
        return false;
    }
};
export default fetchWorks;
