import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Stack, Typography, Divider } from "@mui/material";
import { EmojiPeople as PersonIcon } from "@mui/icons-material";
import { alpha } from "@mui/material/styles";
import ZoneSelect from "./ZoneSelect";
import StateSelect from "./StateSelect";
import CountrySelect from "./CountrySelect";

export default function CreateInspoForm() {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    description: "",
    image: "",
    // tagged_plants: [],
    // image_date: '',
    state: "",
    country: "",
    sun_exposure: "",
    soil_type: "",
    fertilizer: "",
    additional_notes: "",
  });

  function handleChange(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Submitted");
  }

  return (
    <Stack component="form" onSubmit={handleSubmit} gap={2}>
      <Typography variant="subtitle1" align="center">
        Provide as much information as possible to help your fellow gardeners
        <PersonIcon
          fontSize="medium"
          sx={{ verticalAlign: "middle", ml: 0.5 }}
        />
      </Typography>
      <TextField
        name="description"
        label="Description"
        type="text"
        variant="outlined"
        size="small"
        onChange={handleChange}
        required
      />
      <TextField
        name="image"
        helperText="Select an image to upload from your device."
        hiddenLabel
        type="file"
        variant="outlined"
        size="small"
        onChange={handleChange}
      />
      <ZoneSelect
        value={formValues.zone}
        handleChange={handleChange}
        required={true}
      />
      <Divider>Optional Fields</Divider>
      <CountrySelect value={formValues.country} handleChange={handleChange} />
      <StateSelect value={formValues.state} handleChange={handleChange} />
      <TextField
        name="sun_exposure"
        label="Sun Exposure"
        type="text"
        variant="outlined"
        size="small"
        onChange={handleChange}
      />
      <TextField
        name="soil_type"
        label="Soil Type"
        type="text"
        variant="outlined"
        size="small"
        onChange={handleChange}
      />
      <TextField
        name="fertilizer"
        label="Fertilizer Type / Schedule"
        type="text"
        variant="outlined"
        size="small"
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
        onChange={handleChange}
      />
      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{
          mt: 2,
          bgcolor: "#9fd3a1",
          ":hover": { bgcolor: () => alpha("#9fd3a1", 0.75) },
        }}
      >
        Submit
      </Button>
    </Stack>
  );
}
