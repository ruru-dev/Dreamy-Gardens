import { Box, Container, Typography } from "@mui/material";
import LoginForm from "../containers/LoginForm";

export default function LoginPage({ user }) {
  return (
    <Container fixed sx={{ color: "#494949" }}>
      <Box sx={{ width: 500, mx: "auto", mt: 8 }}>
        <Typography variant="h4" align="center" my={3}>
          Welcome Back
        </Typography>
        <LoginForm />
        <Typography variant="subtitle2" align="center" my={2}>
          Don't have an account? Click here to register for free!
        </Typography>
      </Box>
    </Container>
  );
}
