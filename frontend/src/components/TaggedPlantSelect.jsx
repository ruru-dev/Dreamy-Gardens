import { Autocomplete, TextField } from '@mui/material';

export default function TaggedPlantSelect({
    value = [],
    handleChange,
    required = false
}) {
    const options = [
        { label: 'Knockout Rose', id: 1 },
        { label: 'Blue Point Juniper', id: 2 },
        { label: 'Limelight Prime Hydrangea', id: 3 },
        { label: 'Sweet Viburnum', id: 4 }
    ];

    return (
        <Autocomplete
            multiple
            options={options}
            value={value}
            onChange={handleChange}
            isOptionEqualToValue={(option, value) => value.id === option.id}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Tagged Plants"
                    variant="outlined"
                    required={required && value.length === 0}
                    SelectProps={{ MenuProps: { style: { maxHeight: 400 } } }}
                />
            )}
        />
    );
}
