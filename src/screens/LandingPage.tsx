import { Box, Typography, Button } from "@mui/material";

function LandingPage() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      py={5}
    >
      <Typography variant="h2" gutterBottom>
        Welcome to My Friend's Website
      </Typography>
      <Typography variant="h5" component="p">
        Explore the sections to kno more about hat we offer.
      </Typography>
      <Button variant="contained" color="primary" size="large">
        Get Started
      </Button>
    </Box>
  );
}

export default LandingPage;
