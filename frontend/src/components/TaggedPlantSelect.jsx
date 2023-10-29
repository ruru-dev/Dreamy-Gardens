import { useEffect } from 'react';
import { Autocomplete, TextField } from '@mui/material';

export default function TaggedPlantSelect({
    plants,
    fetchPlants,
    value = [],
    handleChange,
    required = false
}) {
    useEffect(() => {
        if (!plants.length) {
            fetchPlants();
        }
    }, []);

    const options = plants.map((plant) => ({
        label: plant.common_name,
        id: plant.id
    }));

    return (
        <Autocomplete
            multiple
            options={options}
            value={value}
            onChange={handleChange}
            isOptionEqualToValue={(option, value) => value.id === option.id}
            autoHighlight
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
