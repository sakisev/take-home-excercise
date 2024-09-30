import ResultCard from '@/components/chat-box/ResultCard.tsx';
import ResultLoader from '@/components/loaders/ResultLoader';
import useChatStore from '@/store';
import { Drawer, List, ListItem, Skeleton, Stack, styled } from '@mui/material';

const StyledDrawer = styled(Drawer)(() => ({
    width: 500,
    '> .MuiPaper-root': {
        width: 500,
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        overflow: 'hidden',
        '.Results-Container': {
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden auto',
            width: '100%',
        },
    },
}));

const loaders = new Array(5).fill(1);

export default function ResultsDrawer() {
    const { showInResultsPanel, oaResponse } = useChatStore();
    const results = oaResponse && oaResponse.results.length > 0 ? oaResponse.results : [];
    return (
        <StyledDrawer variant={'persistent'} anchor={'right'} open>
            <Stack gap={2} p={2}>
                <Skeleton variant={'rounded'} height={30} width={'100%'} />
                <Stack direction={'row'} gap={2}>
                    <Skeleton variant={'rounded'} height={20} width={'50%'} />
                    <Skeleton variant={'rounded'} height={20} width={'50%'} />
                </Stack>
                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                    <Stack direction={'row'} gap={2}>
                        <Skeleton variant={'rounded'} height={20} width={20} />
                        <Skeleton variant={'text'} height={20} width={100} />
                        <Skeleton variant={'rounded'} height={20} width={20} />
                        <Skeleton variant={'text'} height={20} width={100} />
                        <Skeleton variant={'rounded'} height={20} width={10} />
                    </Stack>
                    <Stack direction={'row'} gap={2} alignItems={'center'}>
                        <Skeleton variant={'text'} height={20} width={100} />
                        <Skeleton variant={'rounded'} height={16} width={24} />
                    </Stack>
                </Stack>
                <Stack direction={'row'} justifyContent={'space-between'}>
                    <Stack direction={'row'} gap={2}>
                        <Skeleton variant={'text'} height={20} width={200} />
                        <Skeleton variant={'circular'} height={20} width={20} />
                    </Stack>
                    <Skeleton variant={'text'} height={20} width={64} />
                </Stack>
            </Stack>
            <List className={'Results-Container'}>
                {showInResultsPanel && results.length
                    ? results.map((result, index) => (
                          <ListItem key={index}>
                              <ResultCard oaResult={result} />
                          </ListItem>
                      ))
                    : loaders.map((_, index) => (
                          <ListItem key={index}>
                              <ResultLoader key={index} />
                          </ListItem>
                      ))}
            </List>
        </StyledDrawer>
    );
}
