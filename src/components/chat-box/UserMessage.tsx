import { Message } from '@/store';
import { Typography } from '@mui/material';

interface UserMessageProps {
    message: Message;
}

export default function UserMessage({message}: UserMessageProps) {
    return (
        <Typography className={'Chtbx-Body-Message Chtbx-Body-Message-User'}>
            {message.text}
        </Typography>
    );
}
