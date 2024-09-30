import ResultCard from '@/components/chat-box/ResultCard.tsx';
import { Message } from '@/store';
import { Button, Stack, Typography } from '@mui/material';

interface GeneratedMessageProps {
    message: Message;
}

export default function GeneratedMessage({ message }: GeneratedMessageProps) {
    const { oaResponse } = message;

    const hasOaResponse = oaResponse && oaResponse.results.length > 0;

    const slicedOaResults = hasOaResponse
        ? oaResponse?.results.length >= 4
            ? oaResponse?.results.slice(0, 4)
            : oaResponse?.results
        : null;

    return (
        <Stack className={'Chtbx-Body-Message Chtbx-Body-Message-Assistant'} direction={'column'} gap={2}>
            <Stack className={'Chtbx-Body-Message-Assistant-Text'} gap={2}>
                <Typography>{message.text}</Typography>
            </Stack>
            {slicedOaResults?.map((oaResult) => <ResultCard key={oaResult.id} oaResult={oaResult} />)}
            {slicedOaResults && oaResponse!.results!.length > 4 && (
                <Button variant={'contained'} fullWidth>
                    Load more
                </Button>
            )}
        </Stack>
    );
}
