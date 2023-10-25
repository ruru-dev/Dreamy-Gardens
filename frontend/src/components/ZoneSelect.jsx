import { MenuItem, TextField } from '@mui/material';

export default function ZoneSelect({
    value = '',
    handleChange,
    required = false
}) {
    const options = [
        { value: '1a', label: '1a' },
        { value: '1b', label: '1b' },
        { value: '2a', label: '2a' },
        { value: '2b', label: '2b' },
        { value: '3a', label: '3a' },
        { value: '3b', label: '3b' },
        { value: '4a', label: '4a' },
        { value: '4b', label: '4b' },
        { value: '5a', label: '5a' },
        { value: '5b', label: '5b' },
        { value: '6a', label: '6a' },
        { value: '6b', label: '6b' },
        { value: '7a', label: '7a' },
        { value: '7b', label: '7b' },
        { value: '8a', label: '8a' },
        { value: '8b', label: '8b' },
        { value: '9a', label: '9a' },
        { value: '9b', label: '9b' },
        { value: '10a', label: '10a' },
        { value: '10b', label: '10b' },
        { value: '11a', label: '11a' },
        { value: '11b', label: '11b' },
        { value: '12a', label: '12a' },
        { value: '12b', label: '12b' },
        { value: '13a', label: '13a' },
        { value: '13b', label: '13b' }
    ];

    return (
        <TextField
            name="zone"
            label="Zone"
            select
            variant="outlined"
            size="small"
            value={value}
            onChange={handleChange}
            SelectProps={{ MenuProps: { style: { maxHeight: 400 } } }}
            required={required}
        >
            {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
        </TextField>
    );
}
