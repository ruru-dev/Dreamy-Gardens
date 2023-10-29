import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    TextField,
    Button,
    Stack,
    Typography,
    Divider,
    Alert,
    Backdrop,
    CircularProgress
} from '@mui/material';
import { NaturePeople as NaturePeopleIcon } from '@mui/icons-material';
import { alpha } from '@mui/material/styles';
import ZoneSelect from './ZoneSelect';
import StateSelect from './StateSelect';
import CountrySelect from './CountrySelect';
import TaggedPlantSelect from '../containers/TaggedPlantSelect';

export default function CreateInspoForm({ createInspo }) {
    const [isWaiting, setIsWaiting] = useState(false);
    const [alert, setAlert] = useState(null);
    const [formValues, setFormValues] = useState({
        description: '',
        image: '',
        zone: '',
        country: '',
        state: '',
        sun_exposure: '',
        soil_type: '',
        fertilizer: '',
        additional_notes: ''
    });
    const [taggedPlants, setTaggedPlants] = useState([]);

    function handleChange(e,) {
        console.log(`value of ${e.target.name} changed`, e.target.value);
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    }

    function handleTagChange(e, newValue) {
        console.log(`value of tagged_plants changed`, newValue);
        setTaggedPlants(newValue);
    } 

    async function handleSubmit(e) {
        e.preventDefault();

        console.log('in form - begin submit');
        setIsWaiting(true);
        const response = await createInspo(e.target, taggedPlants);
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
                    New Inspo created - check it out in the{' '}
                    <Link to="/gallery">Gallery</Link>.
                </>
            )
        });
        clearForm();
    }

    function handleError() {
        setAlert({
            severity: 'error',
            message:
                'Oh No - an error occurred while trying to create the Inspo.'
        });
    }

    function clearForm() {
        for (const field in formValues) {
            formValues[field] = '';
        }
        setFormValues({ ...formValues });
        setTaggedPlants([]);
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
            <Stack
                component="form"
                id="form-inspo-create"
                onSubmit={handleSubmit}
                gap={2}
            >
                <Typography variant="subtitle1" align="center">
                    Provide as much information as possible to help your fellow
                    gardeners
                    <NaturePeopleIcon
                        fontSize="medium"
                        sx={{ verticalAlign: 'middle', ml: 0.5 }}
                    />
                </Typography>
                <TextField
                    name="image"
                    helperText="Select an image to upload from your device."
                    hiddenLabel
                    type="file"
                    variant="outlined"
                    size="small"
                    value={formValues.image}
                    onChange={handleChange}
                    required
                />
                <TextField
                    name="description"
                    label="Description"
                    type="text"
                    variant="outlined"
                    size="small"
                    value={formValues.description}
                    onChange={handleChange}
                    required
                />
                <ZoneSelect
                    value={formValues.zone}
                    handleChange={handleChange}
                    required={true}
                />
                <TaggedPlantSelect
                    value={taggedPlants}
                    handleChange={handleTagChange}
                    required={true}
                />
                <Divider>Optional Fields</Divider>
                <CountrySelect
                    value={formValues.country}
                    handleChange={handleChange}
                />
                <StateSelect
                    value={formValues.state}
                    handleChange={handleChange}
                />
                <TextField
                    name="sun_exposure"
                    label="Sun Exposure"
                    type="text"
                    variant="outlined"
                    size="small"
                    value={formValues.sun_exposure}
                    onChange={handleChange}
                />
                <TextField
                    name="soil_type"
                    label="Soil Type"
                    type="text"
                    variant="outlined"
                    size="small"
                    value={formValues.soil_type}
                    onChange={handleChange}
                />
                <TextField
                    name="fertilizer"
                    label="Fertilizer Type / Schedule"
                    type="text"
                    variant="outlined"
                    size="small"
                    value={formValues.fertilizer}
                    onChange={handleChange}
                />
                <TextField
                    name="additional_notes"
                    label="Additional notes"
                    type="text"
                    size="small"
                    multiline
                    rows={3}
                    variant="outlined"
                    value={formValues.additional_notes}
                    onChange={handleChange}
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
                    Submit
                </Button>
            </Stack>
        </>
    );
}
