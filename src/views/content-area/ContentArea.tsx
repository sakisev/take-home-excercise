import Chatbox from '@/components/chat-box/Chatbox.tsx';
import { Box, styled } from '@mui/material';

const TextArea = styled(Box)(({ theme }) => ({
    width: '100%',
    height: '100%',
    padding: theme.spacing(24, 10),
    backgroundColor: theme.palette.background.paper,
    '> p+p': {
        marginBottom: theme.spacing(2),
    },
}));

export default function ContentArea() {
    return (
        <Box
            component={'main'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            width={'100%'}
            height={'100%'}
            bgcolor={(theme) => theme.palette.grey['200']}
            flex={1}
            overflow={'hidden'}
            position={'relative'}
        >
            <Box height={'100%'} width={'100%'} px={8} pt={8} overflow={'hidden'}>
                <TextArea overflow={'hidden auto'}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sagittis,
                        augue in fringilla mollis, nibh ipsum auctor magna, sit amet elementum
                        tellus dolor nec mauris. Etiam eu molestie tortor. Class aptent taciti
                        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                        Aliquam id rutrum nulla, nec tempor nunc. Nam porttitor, elit a pharetra
                        tristique, eros risus dapibus diam, at luctus augue enim eget lorem. In sed
                        aliquam nulla. Nunc sit amet rhoncus nisi, sed egestas odio. Donec semper
                        neque eget tellus scelerisque porta.
                    </p>
                    <p>
                        Aliquam erat volutpat. Suspendisse quis ligula in ante posuere venenatis ut
                        et purus. Etiam sed ornare enim, vitae molestie felis. Integer vulputate
                        quis velit quis eleifend. Nam pellentesque nibh non posuere ornare.
                        Phasellus sit amet felis condimentum, pellentesque ex quis, pretium magna.
                        Ut tincidunt ultricies turpis, sit amet porttitor risus dignissim vel.
                    </p>
                    <p>
                        Praesent finibus at quam at malesuada. Vivamus aliquam ipsum congue est
                        porttitor tempor. Pellentesque mauris dolor, cursus a laoreet in, dictum vel
                        libero. Aenean dignissim dui non leo euismod pulvinar. Morbi lorem ex,
                        sodales sed risus a, fringilla convallis urna. Nunc rhoncus fermentum
                        tempus. Mauris molestie, augue vitae laoreet dapibus, orci elit faucibus
                        nisi, eget bibendum ipsum justo in enim. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Morbi sed lobortis lacus. Aliquam varius metus
                        et ipsum mattis, ut fermentum felis volutpat. Nullam nec fermentum mi.
                    </p>
                    <p>
                        Quisque aliquet viverra convallis. Integer maximus sem ut ex tincidunt, a
                        eleifend nunc ornare. Suspendisse vel pulvinar libero. Quisque ac ex
                        placerat, hendrerit justo quis, convallis turpis. Mauris nec nibh non massa
                        euismod finibus finibus sit amet leo. Fusce a quam varius, consequat mi et,
                        viverra neque. Aliquam feugiat tellus in elit rutrum cursus. Fusce eget
                        efficitur massa. Suspendisse eleifend vulputate massa, at tempor turpis
                        elementum at. Fusce ac commodo quam. Aliquam et tellus non justo vestibulum
                        iaculis. In hac habitasse platea dictumst.
                    </p>
                    <p>
                        Proin tincidunt elit a dignissim tincidunt. Pellentesque pharetra nulla eget
                        sodales gravida. Curabitur hendrerit ligula id nunc convallis feugiat. Ut
                        accumsan blandit velit, id aliquet elit laoreet sit amet. Nam placerat nulla
                        at blandit commodo. Curabitur id tristique turpis. Ut sit amet rutrum nibh,
                        vel venenatis eros.
                    </p>
                </TextArea>
            </Box>
            <Chatbox />
        </Box>
    );
}
