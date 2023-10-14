import { ImageList, ImageListItem, ImageListItemBar, Paper } from "@mui/material";
import { useEffect } from "react";

export default function GalleryInspos({ galleryInspos, fetchGalleryInspos }) {
  // useEffect is a react hook function that will execute every time the component is rendered.
  // The second parameter (in this case, an empty array) lets us restrict this effect to the intial render.
  // We only want the fetch to the API on the initial render, to prepopulate the gallery inspos.
  useEffect(() => {
    if (!galleryInspos.length) {
      fetchGalleryInspos();
    }
  }, []);

  return (
    <ImageList variant="masonry" cols={3} gap={10}>
      {galleryInspos.map((inspo) => (
        <ImageListItem key={inspo.id} component={Paper}>
          <img
            srcSet={inspo["image_url"]}
            src={inspo["image_url"]}
            alt={`Garden from ${inspo.state}`}
            loading="lazy"
          />
          <ImageListItemBar
            title={`Zone ${inspo.zone} - ${inspo.state}, ${inspo.country}`}
            subtitle={`${inspo.tags.join(', ')}`}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
