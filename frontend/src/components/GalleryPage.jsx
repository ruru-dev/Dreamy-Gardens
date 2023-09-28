import { Container } from "@mui/material";
import PageTitle from "./PageTitle";
import GalleryInspos from "../containers/GalleryInspos";

export default function GalleryPage({ user }) {
  return (
    <Container fixed sx={{color: '#494949'}}>
      <PageTitle title="Gallery Page" subtitle="Find your inspiration"/>
      <GalleryInspos />
    </Container>
  );
}
