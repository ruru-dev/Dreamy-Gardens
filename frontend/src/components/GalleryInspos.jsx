import { ImageList, ImageListItem, ImageListItemBar, Paper } from "@mui/material";

export default function GalleryInspos({ inspos }) {
  return (
    <ImageList variant="masonry" cols={3} gap={10}>
      {inspos.map((inspo) => (
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
