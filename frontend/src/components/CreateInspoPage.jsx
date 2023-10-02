import { Box, Container} from "@mui/material";
import PageTitle from "./PageTitle";
import CreateInspoForm from "../containers/CreateInspoForm";

export default function CreateInspoPage() {
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
      <PageTitle title="Create an Inspo" />
      <Box sx={{ width: 650, mx: "auto", mt: 1 }}>
        <CreateInspoForm />
      </Box>
    </Container>
  );
}
