import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Stack } from '@mui/material';
import { alpha } from '@mui/material/styles';

export default function LoginForm({ loginUser }) {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        loginUser({ username, password });
        navigate('/');
    }

    return (
        <Stack component="form" onSubmit={handleSubmit} gap={2}>
            <TextField
                required
                label="Username"
                variant="outlined"
                size="small"
                onChange={(e) => setUsername(e.target.value)}
                type="email"
            />
            <TextField
                required
                label="Password"
                variant="outlined"
                size="small"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
            />
            <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                    bgcolor: '#9fd3a1',
                    ':hover': { bgcolor: () => alpha('#9fd3a1', 0.75) },
                    mt: 2
                }}
            >
                Log In
            </Button>
        </Stack>
    );
}
