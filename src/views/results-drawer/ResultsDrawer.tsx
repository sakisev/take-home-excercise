import ResultLoader from '@/components/loaders/ResultLoader';
import { Drawer, Skeleton, Stack, styled, Typography } from '@mui/material';

const StyledDrawer = styled(Drawer)(() => ({
    width: 500,
    '> .MuiPaper-root': {
        width: 500,
    },
}));

export default function ResultsDrawer() {
    const results = new Array(5).fill(1);

    return (
        <StyledDrawer variant={'persistent'} anchor={'right'} open>
            For safekeeping:
            <Typography variant={'h4'}>articles published after 2015 with exactly 100 citations</Typography>
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
            <Stack gap={4} p={2} mt={2} overflow={'hidden auto'}>
                {results.map((_, index) => (
                    <ResultLoader key={index} />
                ))}
            </Stack>
        </StyledDrawer>
    );
}
