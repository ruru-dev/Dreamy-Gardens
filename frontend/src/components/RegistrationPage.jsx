import { Box, Container, Typography } from "@mui/material";
import PageTitle from "./PageTitle";
import RegistrationForm from "../containers/RegistrationForm";
import { Link } from "react-router-dom";

export default function RegistrationPage({ user }) {
  return (
    <Container
      fixed
      sx={{
        color: "#494949",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <PageTitle title="Create an Account" />
      <Box sx={{ width: 500, mx: "auto", mt: 1 }}>
        <RegistrationForm />
        <Typography variant="subtitle2" align="center" my={2}>
          Already have an account? <Link to="/login">Click here to log in.</Link>
        </Typography>
      </Box>
    </Container>
  );
}
