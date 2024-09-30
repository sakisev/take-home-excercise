import { Results } from '@/utils/types/openAlex.ts';
import { FileCopy } from '@mui/icons-material';
import { Button, Card, CardActions, CardContent, Stack, Typography } from '@mui/material';

interface ResultCardProps {
    oaResult: Results;
}

export default function ResultCard({ oaResult }: ResultCardProps) {
    const authors =
        oaResult.authorships.length > 1
            ? oaResult.authorships[0].author.display_name + 'et al'
            : oaResult.authorships.length === 1
              ? oaResult.authorships[0].author.display_name
              : null;

    const isOpenAccess = oaResult.open_access.is_oa && oaResult.open_access.oa_url;
    return (
        <Card className={'Chtbx-Body-Message-Assistant-ResultCard'} key={oaResult.id}>
            <CardContent>
                <Stack direction={'row'} gap={2} alignItems={'center'}>
                    <FileCopy fontSize={'inherit'} color={'primary'} />
                    <Typography variant={'subtitle2'} noWrap>
                        {oaResult.title}
                    </Typography>
                </Stack>
                <Stack direction={'row'} gap={2} width={'75%'}>
                    <Typography variant={'caption'} fontWeight={'bolder'}>
                        {oaResult.publication_year}
                    </Typography>
                    <Typography variant={'caption'} noWrap>
                        {oaResult.locations[0].source?.display_name}
                    </Typography>
                </Stack>
                <Stack direction={'row'} justifyContent={'space-between'}>
                    {authors && <Typography variant={'body2'}>{authors}</Typography>}
                    <Typography variant={'caption'}>{oaResult.cited_by_count} citations</Typography>
                </Stack>
            </CardContent>
            {isOpenAccess && (
                <CardActions>
                    <Button size={'small'} fullWidth variant={'outlined'} href={oaResult.open_access.oa_url!}>
                        Download PDF
                    </Button>
                </CardActions>
            )}
        </Card>
    );
}
