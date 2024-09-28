import { Box, Drawer, Skeleton, Stack, styled, useMediaQuery, useTheme } from '@mui/material';

const StyledDrawer = styled(Drawer)(() => ({
    // position: 'fixed',
    // left: 0,
    // top: 0,
    width: 300,
    '> .MuiPaper-root': {
        width: 300,
    },
}));

export default function Sidebar() {
    const theme = useTheme();
    const isMdOrLower = useMediaQuery(theme.breakpoints.down('md'));

    if (isMdOrLower) {
        return null;
    }

    return (
        <StyledDrawer variant={'persistent'} open={!isMdOrLower} anchor={'left'}>
            <Stack flex={1}>
                <Stack p={4}>
                    <Stack direction={'row'} gap={2} alignItems={'center'}>
                        <Skeleton variant={'rounded'} width={48} height={48} />
                        <Skeleton variant={'text'} width={180} height={48} />
                    </Stack>
                </Stack>
                <Stack>
                    <Stack
                        direction={'row'}
                        bgcolor={theme.palette.grey['100']}
                        height={48}
                        alignItems={'center'}
                    >
                        <Skeleton
                            variant={'circular'}
                            width={24}
                            height={24}
                            sx={{ marginX: theme.spacing(6) }}
                        />
                        <Skeleton variant={'text'} width={180} height={24} />
                    </Stack>
                    <Stack direction={'row'} height={48} alignItems={'center'}>
                        <Skeleton
                            variant={'circular'}
                            width={24}
                            height={24}
                            sx={{ marginX: theme.spacing(6) }}
                        />
                        <Skeleton variant={'text'} width={180} height={24} />
                    </Stack>
                </Stack>
                <Stack mt={8}>
                    <Skeleton
                        variant={'text'}
                        width={180}
                        height={24}
                        sx={{ marginLeft: theme.spacing(4) }}
                    />
                    <Stack direction={'row'} height={48} alignItems={'center'}>
                        <Skeleton
                            variant={'circular'}
                            width={24}
                            height={24}
                            sx={{ marginX: theme.spacing(6) }}
                        />
                        <Skeleton variant={'text'} width={180} height={24} />
                    </Stack>
                    <Stack direction={'row'} height={48} alignItems={'center'}>
                        <Skeleton
                            variant={'circular'}
                            width={24}
                            height={24}
                            sx={{ marginX: theme.spacing(6) }}
                        />
                        <Skeleton variant={'text'} width={180} height={24} />
                    </Stack>
                    <Stack direction={'row'} height={48} alignItems={'center'}>
                        <Skeleton
                            variant={'circular'}
                            width={24}
                            height={24}
                            sx={{ marginX: theme.spacing(6) }}
                        />
                        <Skeleton variant={'text'} width={180} height={24} />
                    </Stack>
                    <Stack direction={'row'} height={48} alignItems={'center'}>
                        <Skeleton
                            variant={'circular'}
                            width={24}
                            height={24}
                            sx={{ marginX: theme.spacing(6) }}
                        />
                        <Skeleton variant={'text'} width={180} height={24} />
                    </Stack>
                    <Stack direction={'row'} height={48} alignItems={'center'}>
                        <Skeleton
                            variant={'circular'}
                            width={24}
                            height={24}
                            sx={{ marginX: theme.spacing(6) }}
                        />
                        <Skeleton variant={'text'} width={180} height={24} />
                    </Stack>
                </Stack>
            </Stack>
            <Box p={4}>
                <Skeleton variant={'rounded'} height={48} sx={{ borderRadius: 25 }} />
            </Box>
        </StyledDrawer>
    );
}
