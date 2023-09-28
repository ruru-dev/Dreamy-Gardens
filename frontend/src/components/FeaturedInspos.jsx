import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { ReactDOM } from "react";

export default function FeaturedInspos({ inspos }) {
  return (
    <Box sx={{ marginTop: 5 }}>
      <Typography gutterBottom variant="h4" align="center">
        Featured Inspos
      </Typography>
      
      {inspos.map((inspo, i) => {
        const cardMedia = (
          <CardMedia
            component="img"
            height="200"
            width="400"
            sx={{objectFit: "cover" }}
            image={inspo["image_url"]}
          />
        );

        const cardContent = (
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {`${inspo.submitter.firstname} ${inspo.submitter.lastname
                .charAt(0)
                .toUpperCase()}. from ${inspo.state}`}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {inspo.description}
            </Typography>
          </CardContent>
        );

        return (
          <Card key={inspo.id} sx={{ display: "flex", margin: "20px 0" }}>
            {(i % 2 === 0) ? [ cardMedia, cardContent ] : [ cardContent, cardMedia ]}
          </Card>
        );    
      })}
    </Box>
  );
}
