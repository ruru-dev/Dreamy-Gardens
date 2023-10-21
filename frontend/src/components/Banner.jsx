import { Box, Paper } from '@mui/material';

export default function Banner({ imageUrl }) {
    return (
        <Box
            component={Paper}
            sx={{
                margin: '20px 0',
                backgroundImage: `url('${imageUrl}')`,
                backgroundPositionY: '90%',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '300px'
            }}
        />
    );
}
