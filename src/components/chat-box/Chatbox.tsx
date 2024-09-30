import generateChatResponse from '@/api/open-ai/generateChatResponse';
import fetchWorks from '@/api/open-alex';
import GeneratedMessage from '@/components/chat-box/GeneratedMessage';
import UserMessage from '@/components/chat-box/UserMessage';
import useChatStore, { Message } from '@/store';
import { ChatBubbleOutlineRounded, ChevronLeft, Close, Send } from '@mui/icons-material';
import { alpha, Fab, IconButton, InputAdornment, Popover, Stack, styled, TextField, Typography } from '@mui/material';
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
            justifyContent: 'flex-start',
            gap: theme.spacing(3),

            '.Chtbx-Body-Message': {
                alignItems: 'flex-start',
                maxWidth: '90%',
                borderRadius: 5,
                padding: theme.spacing(2),

                '> .Chtbx-Body-Message-User': {
                    boxShadow: theme.shadows['1'],
                },
                ' .Chtbx-Body-Message-Assistant-Text': {
                    padding: theme.spacing(2),
                    borderRadius: 5,
                    boxShadow: theme.shadows['1'],
                },
                '&-User': {
                    alignSelf: 'flex-end',
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.common.white,
                },
            },
        },
        '> .Chtbx-Actions': {
            padding: theme.spacing(4),
            '> .Chtbx-Actions-TextField': {
                '.Chtbx-Actions-Input-Adornment': {
                    cursor: 'pointer',
                    padding: theme.spacing(1),
                    borderRadius: '50%',
                    '&:hover': {
                        backgroundColor: alpha(theme.palette.action.hover, theme.palette.action.hoverOpacity),
                    },
                    '&:active': {
                        backgroundColor: alpha(theme.palette.action.active, theme.palette.action.activatedOpacity),
                    },
                },
                '&:has(> .Mui-disabled)': {
                    '.Chtbx-Actions-Input-Adornment': {
                        pointerEvents: 'none',
                        svg: {
                            color: theme.palette.action.disabled,
                        },
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
    const { toggleChatbox, isChatboxOpen, messages, clearChatBox } = useChatStore();
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [userInput, setUserInput] = useState<string | ''>('');

    const submitUserInput = async () => {
        messages.push({ text: userInput, role: 'user' });
        const input = userInput;
        setUserInput('');
        const response = await generateChatResponse(input);

        if (response) {
            messages.push({ ...response, role: 'assistant' });

            if (response.url) {
                const openAlexResponse = await fetchWorks(response.url);
                if (!openAlexResponse) {
                    return response;
                }
            }
        }
    };

    const submitOnEnter = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            return submitUserInput();
        }
    };

    const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput(e.target.value);
    };

    const handleChatboxToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(e.currentTarget);
        toggleChatbox();
    };

    const RenderMessageItem = ({ message }: { message: Message }) => {
        switch (message.role) {
            case 'user':
                return <UserMessage message={message} />;
            case 'assistant':
                return <GeneratedMessage message={message} />;
        }
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
                    <IconButton size={'small'} onClick={clearChatBox}>
                        <ChevronLeft width={24} height={24} />
                    </IconButton>
                    <Typography variant={'h6'}>Chat</Typography>
                    <IconButton size={'small'} onClick={toggleChatbox}>
                        <Close />
                    </IconButton>
                </Stack>
                <Stack className={'Chtbx-Body'}>
                    {messages.map((message, index) => (
                        <RenderMessageItem key={index} message={message} />
                    ))}
                </Stack>
                <Stack className={'Chtbx-Actions'} direction={'row'}>
                    <TextField
                        className={'Chtbx-Actions-TextField'}
                        size={'small'}
                        variant={'outlined'}
                        placeholder={'Artificial intelligence articles published after 2015 with exactly 100 citations'}
                        fullWidth
                        multiline
                        onChange={handleUserInput}
                        value={userInput}
                        onKeyDown={submitOnEnter}
                        maxRows={5}
                        slotProps={{
                            input: {
                                className: 'Chtbx-Actions-Input',
                                endAdornment: (
                                    <InputAdornment
                                        className={'Chtbx-Actions-Input-Adornment'}
                                        position='end'
                                        onClick={submitUserInput}
                                    >
                                        <Send
                                            className={'Chtbx-Actions-Input-SendIcon'}
                                            color={'primary'}
                                            fontSize={'small'}
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
