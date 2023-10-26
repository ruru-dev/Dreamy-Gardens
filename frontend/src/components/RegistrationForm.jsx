import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    TextField,
    Button,
    Stack,
    Typography,
    Alert,
    Backdrop,
    CircularProgress
} from '@mui/material';
import { WavingHand as WavingHandIcon } from '@mui/icons-material';
import { alpha } from '@mui/material/styles';

export default function RegistrationForm({ user, createUser }) {
    const [isWaiting, setIsWaiting] = useState(false);
    const [alert, setAlert] = useState(null);
    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
        firstname: '',
        lastname: ''
    });

    function handleChange(e) {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        console.log('in form - begin submit');
        setIsWaiting(true);
        const response = await createUser(formValues);
        setIsWaiting(false);
        console.log('in form - end submit');

        if (response.status === 201) {
            handleSuccess();
        } else {
            handleError();
        }
    }

    function handleSuccess() {
        setAlert({
            severity: 'success',
            message: (
                <>
                    New Account created - visit the{' '}
                    <Link to="/login">Login Page</Link> to login.
                </>
            )
        });
        clearForm();
    }

    function handleError() {
        setAlert({
            severity: 'error',
            message:
                'Oh No - an error occurred while trying to create the Account.'
        });
    }

    function clearForm() {
        for (const field in formValues) {
            formValues[field] = '';
        }
        setFormValues({ ...formValues });
    }

    return (
        <>
            <Backdrop
                open={isWaiting}
                sx={{
                    color: '#fff',
                    zIndex: (theme) => theme.zIndex.drawer + 1
                }}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            {alert && (
                <Alert
                    severity={alert.severity}
                    onClose={() => setAlert(null)}
                    sx={{ mb: 3 }}
                >
                    {alert.message}
                </Alert>
            )}
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
                    value={formValues.firstname}
                    onChange={handleChange}
                    required
                />
                <TextField
                    name="lastname"
                    label="Last Name"
                    type="text"
                    variant="outlined"
                    size="small"
                    value={formValues.lastname}
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
                    value={formValues.email}
                    onChange={handleChange}
                    required
                />
                <TextField
                    name="password"
                    label="Password"
                    type="password"
                    variant="outlined"
                    size="small"
                    value={formValues.password}
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
        </>
    );
}
