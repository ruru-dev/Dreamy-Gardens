import { MenuItem, TextField } from '@mui/material';

export default function StateSelect({
    value = '',
    handleChange,
    required = false
}) {
    const options = [
        { label: 'Alabama', abbrv: 'AL' },
        { label: 'Alaska', abbrv: 'AK' },
        { label: 'Arizona', abbrv: 'AZ' },
        { label: 'Arkansas', abbrv: 'AR' },
        { label: 'California', abbrv: 'CA' },
        { label: 'Colorado', abbrv: 'CO' },
        { label: 'Connecticut', abbrv: 'CT' },
        { label: 'Delaware', abbrv: 'DE' },
        { label: 'Florida', abbrv: 'FL' },
        { label: 'Georgia', abbrv: 'GA' },
        { label: 'Hawaii', abbrv: 'HI' },
        { label: 'Idaho', abbrv: 'ID' },
        { label: 'Illinois', abbrv: 'IL' },
        { label: 'Indiana', abbrv: 'IN' },
        { label: 'Iowa', abbrv: 'IA' },
        { label: 'Kansas', abbrv: 'KS' },
        { label: 'Kentucky', abbrv: 'KY' },
        { label: 'Louisiana', abbrv: 'LA' },
        { label: 'Maine', abbrv: 'ME' },
        { label: 'Maryland', abbrv: 'MD' },
        { label: 'Massachusetts', abbrv: 'MA' },
        { label: 'Michigan', abbrv: 'MI' },
        { label: 'Minnesota', abbrv: 'MN' },
        { label: 'Mississippi', abbrv: 'MS' },
        { label: 'Missouri', abbrv: 'MO' },
        { label: 'Montana', abbrv: 'MT' },
        { label: 'Nebraska', abbrv: 'NE' },
        { label: 'Nevada', abbrv: 'NV' },
        { label: 'New Hampshire', abbrv: 'NH' },
        { label: 'New Jersey', abbrv: 'NJ' },
        { label: 'New Mexico', abbrv: 'NM' },
        { label: 'New York', abbrv: 'NY' },
        { label: 'North Carolina', abbrv: 'NC' },
        { label: 'North Dakota', abbrv: 'ND' },
        { label: 'Ohio', abbrv: 'OH' },
        { label: 'Oklahoma', abbrv: 'OK' },
        { label: 'Oregon', abbrv: 'OR' },
        { label: 'Pennsylvania', abbrv: 'PA' },
        { label: 'Rhode Island', abbrv: 'RI' },
        { label: 'South Carolina', abbrv: 'SC' },
        { label: 'South Dakota', abbrv: 'SD' },
        { label: 'Tennessee', abbrv: 'TN' },
        { label: 'Texas', abbrv: 'TX' },
        { label: 'Utah', abbrv: 'UT' },
        { label: 'Vermont', abbrv: 'VT' },
        { label: 'Virginia', abbrv: 'VA' },
        { label: 'Washington', abbrv: 'WA' },
        { label: 'West Virginia', abbrv: 'WV' },
        { label: 'Wisconsin', abbrv: 'WI' },
        { label: 'Wyoming', abbrv: 'WY' }
    ];

    return (
        <TextField
            select
            name="state"
            label="State"
            variant="outlined"
            size="small"
            value={value}
            onChange={handleChange}
            SelectProps={{ MenuProps: { style: { maxHeight: 400 } } }}
            required={required}
        >
            {options.map((option) => (
                <MenuItem key={option.label} value={option.label}>
                    {option.label}
                </MenuItem>
            ))}
        </TextField>
    );
}
