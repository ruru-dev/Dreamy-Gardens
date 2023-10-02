import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Stack } from "@mui/material";
import { alpha } from "@mui/material/styles";

export default function LoginForm({ loginUser }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    loginUser({ username, password });
    navigate("/");
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack>
        <TextField
          required
          label="Username"
          variant="standard"
          onChange={(e) => setUsername(e.target.value)}
          type="email"
        />
        <TextField
          required
          label="Password"
          variant="standard"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            mt: 3,
            bgcolor: "#9fd3a1",
            ":hover": { bgcolor: (theme) => alpha("#9fd3a1", 0.75) },
          }}
        >
          Log In
        </Button>
      </Stack>
    </form>
  );
}
