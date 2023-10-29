import { MenuItem, TextField } from '@mui/material';

export default function CountrySelect({
    value = '',
    handleChange,
    required = false
}) {
    const options = [{ label: 'United States', value: 'US' }];

    return (
        <TextField
            select
            name="country"
            label="Country"
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
