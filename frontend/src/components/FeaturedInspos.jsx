import { useEffect } from 'react';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';

export default function FeaturedInspos({
    featuredInspos,
    fetchFeaturedInspos
}) {
    useEffect(() => {
        if (!featuredInspos.length) {
            fetchFeaturedInspos();
        }
    }, []);

    return (
        <Box sx={{ marginTop: 5 }}>
            <Typography gutterBottom variant="h4" align="center">
                Featured Inspos
            </Typography>

            {featuredInspos.map((inspo, i) => {
                const cardMedia = (
                    <CardMedia
                        component="img"
                        height="200"
                        width="400"
                        sx={{ objectFit: 'cover' }}
                        image={inspo['image_url']}
                    />
                );

                const cardContent = (
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {`${inspo.user.firstname} ${inspo.user.lastname
                                .charAt(0)
                                .toUpperCase()}. from ${inspo.state}`}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {inspo.description}
                        </Typography>
                    </CardContent>
                );

                return (
                    <Card
                        key={inspo.id}
                        sx={{ display: 'flex', margin: '20px 0' }}
                    >
                        {i % 2 === 0
                            ? [cardMedia, cardContent]
                            : [cardContent, cardMedia]}
                    </Card>
                );
            })}
        </Box>
    );
}
