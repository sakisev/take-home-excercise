import { Skeleton, Stack } from '@mui/material';

export default function ResultLoader() {
    return (
        <Stack height={64} width={'100%'} my={2}>
            <Stack direction={'row'} gap={2} justifyContent={'space-between'}>
                <Stack direction={'row'} gap={2}>
                    <Skeleton variant={'rounded'} height={24} width={24} />
                    <Skeleton variant={'text'} width={100} />
                </Stack>
                <Stack direction={'row'} gap={2}>
                    <Skeleton variant={'rounded'} height={24} width={24} />
                    <Skeleton variant={'rounded'} height={24} width={24} />
                    <Skeleton variant={'rounded'} height={24} width={24} />
                </Stack>
            </Stack>
            <Skeleton variant={'text'} height={24} width={400} sx={{ marginLeft: 8 }} />
            <Skeleton variant={'text'} height={24} width={340} sx={{ marginLeft: 8 }} />
            <Skeleton variant={'text'} height={16} width={128} sx={{ marginLeft: 8 }} />
        </Stack>
    );
}
