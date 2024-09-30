import { GeneratedResponse } from '@/utils/types/generatedResponse.ts';
import { OpenAlexWorkResponse } from '@/utils/types/openAlex.ts';
import { create } from 'zustand';

export interface Message extends GeneratedResponse {
    role: 'user' | 'assistant';
}

interface ChatState {
    isChatboxOpen: boolean;
    toggleChatbox: () => void;
    messages: Message[];
    showInResultsPanel: boolean;
    setShowInResultsPanel: (value: boolean) => void;
    oaResponse?: OpenAlexWorkResponse;
    setOaResponse: (value: OpenAlexWorkResponse) => void;
    clearChatBox: () => void;
}

const useChatStore = create<ChatState>((set, get) => ({
    isChatboxOpen: false,
    messages: [],
    toggleChatbox: () => {
        const prevState = get().isChatboxOpen;
        set({ isChatboxOpen: !prevState });
    },
    showInResultsPanel: false,
    setShowInResultsPanel: (value: boolean) => {
        set({ showInResultsPanel: value });
    },
    setOaResponse: (value) => set({ oaResponse: value }),
    clearChatBox: () => set({ messages: [] }),
}));

export default useChatStore;
