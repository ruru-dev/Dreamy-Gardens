import { Box, Container, Typography } from "@mui/material";
import Banner from "./Banner";
import FeaturedInspos from "../containers/FeaturedInspos";
import CallToAction from "./CallToAction";

export default function HomePage({ user }) {
  return (
    <Container fixed>
      <Box sx={{ margin: "20px 0"}}>
        <Typography variant="h3">
            Welcome to Dreamy Gardens
        </Typography>
        <Typography variant="body1" color="text.secondary">
            Search and upload beautiful garden photos with the plants identified!
        </Typography>
      </Box>
      <Banner imageUrl="images/banner-image.jpg" />
      <FeaturedInspos />
      <CallToAction />
    </Container>
  );
}
