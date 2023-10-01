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
      </Box>
    </Container>
  );
}
