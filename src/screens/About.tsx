import { Box, Typography } from "@mui/material";

function About() {
  return (
    <Box py={5}>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1">
        This section provides information about the services and mission of the
        website.
      </Typography>
    </Box>
  );
}

export default About;
