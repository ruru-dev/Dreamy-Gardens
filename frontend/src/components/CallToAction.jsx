import { Box, Button, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function CallToAction() {
    return (
        <Box
            component={Paper}
            sx={{
                backgroundColor: '#9fd3a1',
                color: 'white',
                height: '200px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                rowGap: '20px',
                margin: '50px 0'
            }}
        >
            <Typography variant="h4">Want to inspire others?</Typography>
            <Link to="/register">
                <Button
                    sx={{ bgcolor: 'white', color: 'grey' }}
                    variant="filled"
                >
                    Click Here to Get Started!
                </Button>
            </Link>
        </Box>
    );
}
