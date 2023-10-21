import { MenuItem, TextField } from '@mui/material';

export default function CountrySelect({
    country,
    handleChange,
    required = false
}) {
    const options = [{ label: 'United States', value: 'US' }];

    return (
        <TextField
            name="country"
            label="Country"
            select
            variant="outlined"
            size="small"
            value={country}
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
