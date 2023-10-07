import { Container } from "@mui/material";
import Banner from "./Banner";
import FeaturedInspos from "../containers/FeaturedInspos";
import CallToAction from "./CallToAction";
import PageTitle from "./PageTitle";

export default function HomePage({ user }) {
  return (
    <Container fixed sx={{color: '#494949'}}>
      <PageTitle
        title="Welcome to Dreamy Gardens"
        subtitle="Search and upload beautiful garden photos with the plants identified!"
      />
      <Banner imageUrl="images/banner.jpg" />
      <FeaturedInspos />
      <CallToAction />
    </Container>
  );
}
