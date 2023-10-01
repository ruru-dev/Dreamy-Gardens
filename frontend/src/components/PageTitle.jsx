import { Box, Typography } from "@mui/material";

export default function PageTitle({ title, subtitle }) {
  return (
    <Box my={3}>
      <Typography variant="h3">{title}</Typography>
      {subtitle && (
        <Typography variant="body1" color="text.secondary">
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}
