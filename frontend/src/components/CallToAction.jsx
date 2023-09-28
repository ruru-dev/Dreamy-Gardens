import { Box, Button, Paper, Typography } from "@mui/material";

export default function CallToAction() {
  return (
    <Box
      component={Paper}
      sx={{
        backgroundColor: "secondary.main",
        color: "white",
        height: "200px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        rowGap: "20px",
        margin: "50px 0"
      }}
    >
      <Typography variant="h4">
        Want to inspire others?
      </Typography>
      <Button color="inherit" variant="outlined">
        Click Here
      </Button>
    </Box>
  );
}
