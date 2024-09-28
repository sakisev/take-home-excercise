import { create } from 'zustand';

interface ChatState {
    isChatboxOpen: boolean;
    toggleChatbox: () => void;
    search: string;
}

const useChatStore = create<ChatState>((set, get) => ({
    isChatboxOpen: false,
    toggleChatbox: () => {
        const prevState = get().isChatboxOpen;
        set({ isChatboxOpen: !prevState });
    },
    search: '',
}));

export default useChatStore;
