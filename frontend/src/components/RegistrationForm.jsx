import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Stack, Typography } from '@mui/material';
import { WavingHand as WavingHandIcon } from '@mui/icons-material';
import { alpha } from '@mui/material/styles';

export default function RegistrationForm() {
    const navigate = useNavigate();

    const [formValues, setFormValues] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    });

    function handleChange(e) {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        alert('Submitted');
    }

    return (
        <Stack component="form" onSubmit={handleSubmit} gap={2}>
            <Typography variant="subtitle1" align="center">
                Provide some basic information and start inspiring!
                <WavingHandIcon
                    fontSize="medium"
                    sx={{ verticalAlign: 'middle', ml: 0.5 }}
                />
            </Typography>
            <TextField
                name="firstname"
                label="First Name"
                type="text"
                variant="outlined"
                size="small"
                onChange={handleChange}
                required
            />
            <TextField
                name="lastname"
                label="Last Name"
                type="text"
                variant="outlined"
                size="small"
                onChange={handleChange}
                required
            />
            <TextField
                name="email"
                label="Email"
                type="email"
                variant="outlined"
                size="small"
                helperText="This will be your username."
                onChange={handleChange}
                required
            />
            <TextField
                name="password"
                label="Password"
                type="password"
                variant="outlined"
                size="small"
                onChange={handleChange}
                required
            />
            <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                    mt: 2,
                    bgcolor: '#9fd3a1',
                    ':hover': { bgcolor: () => alpha('#9fd3a1', 0.75) }
                }}
            >
                Create
            </Button>
        </Stack>
    );
}
