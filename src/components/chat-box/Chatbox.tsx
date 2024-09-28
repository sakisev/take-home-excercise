import useChatStore from '@/store';
import { ChatBubbleOutlineRounded, ChevronLeft, Close, Send } from '@mui/icons-material';
import {
    Fab,
    IconButton,
    InputAdornment,
    Popover,
    Skeleton,
    Stack,
    styled,
    TextField,
    Typography,
} from '@mui/material';
import { useState } from 'react';

const StyledPopover = styled(Popover)(({ theme }) => ({
    '> .MuiPaper-root': {
        width: 400,
        height: 650,
        padding: 0,
        borderRadius: 8,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        '> .Chtbx-Title': {
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: theme.palette.primary.main,
            padding: theme.spacing(4, 4, 8, 4),
            color: theme.palette.common.white,
            '> .MuiIconButton-root': {
                color: theme.palette.common.white,
            },
        },
        '> .Chtbx-Body': {
            background: theme.palette.background.paper,
            marginTop: theme.spacing(-4),
            padding: theme.spacing(4, 4, 4, 4),
            borderRadius: 8,
            width: '100%',
            flexGrow: 1,
            overflowY: 'auto',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            '> .Chtbx-Body-User': {
                alignSelf: 'flex-end',
            },
        },
        '> .Chtbx-Actions': {
            padding: theme.spacing(4),
            '> .Chtbx-Actions-TextField': {
                '&:has(> .Mui-disabled)': {
                    '.Chtbx-Actions-Input-SendIcon': {
                        color: theme.palette.action.disabled,
                    },
                },
            },
        },
    },
}));

const StyledFab = styled(Fab)(({ theme }) => ({
    position: 'absolute',
    bottom: 32,
    right: 32,
    backgroundColor: theme.palette.background.paper,
}));

export default function Chatbox() {
    const { toggleChatbox, isChatboxOpen } = useChatStore();
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleChatboxToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(e.currentTarget);
        toggleChatbox();
    };

    return (
        <>
            <StyledPopover
                anchorEl={anchorEl}
                open={isChatboxOpen}
                onClose={toggleChatbox}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
            >
                <Stack className={'Chtbx-Title'} direction={'row'}>
                    <IconButton size={'small'} onClick={() => {}}>
                        <ChevronLeft width={24} height={24} />
                    </IconButton>
                    <Typography variant={'h6'}>Chat</Typography>
                    <IconButton size={'small'} onClick={toggleChatbox}>
                        <Close />
                    </IconButton>
                </Stack>
                <Stack className={'Chtbx-Body'}>
                    <Skeleton className={'Chtbx-Body-GPT'} height={64} width={150} />
                    <Skeleton className={'Chtbx-Body-GPT'} height={64} width={150} />
                    <Skeleton className={'Chtbx-Body-User'} height={64} width={150} />
                    <Skeleton className={'Chtbx-Body-GPT'} height={64} width={150} />
                    <Skeleton className={'Chtbx-Body-User'} height={64} width={150} />
                    <Skeleton className={'Chtbx-Body-GPT'} height={64} width={150} />
                    <Skeleton className={'Chtbx-Body-User'} height={64} width={150} />
                    <Skeleton className={'Chtbx-Body-GPT'} height={64} width={150} />
                    <Skeleton className={'Chtbx-Body-User'} height={64} width={150} />
                    <Skeleton className={'Chtbx-Body-GPT'} height={64} width={150} />
                    <Skeleton className={'Chtbx-Body-GPT'} height={64} width={150} />
                    <Skeleton className={'Chtbx-Body-GPT'} height={64} width={150} />
                    <Skeleton className={'Chtbx-Body-GPT'} height={64} width={150} />
                    <Skeleton className={'Chtbx-Body-GPT'} height={64} width={150} />
                </Stack>
                <Stack className={'Chtbx-Actions'} direction={'row'}>
                    <TextField
                        className={'Chtbx-Actions-TextField'}
                        size={'small'}
                        variant={'outlined'}
                        fullWidth
                        multiline
                        maxRows={5}
                        slotProps={{
                            input: {
                                className: 'Chtbx-Actions-Input',
                                endAdornment: (
                                    <InputAdornment position='end'>
                                        <Send
                                            className={'Chtbx-Actions-Input-SendIcon'}
                                            color={'primary'}
                                        />
                                    </InputAdornment>
                                ),
                            },
                        }}
                    />
                </Stack>
            </StyledPopover>
            <StyledFab size={'large'} variant={'circular'} onClick={handleChatboxToggle}>
                <ChatBubbleOutlineRounded />
            </StyledFab>
        </>
    );
}
