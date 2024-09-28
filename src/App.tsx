import ContentArea from '@/views/content-area/ContentArea';
import ResultsDrawer from '@/views/results-drawer/ResultsDrawer';
import Sidebar from '@/views/sidebar/Sidebar';
import { Box } from '@mui/material';

function App() {
    return (
        <Box display={'flex'} width={'100%'} height={'100%'}>
            <Sidebar />
            <ContentArea />
            <ResultsDrawer />
        </Box>
    );
}

export default App;
