import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          style={{ color: "inherit", textDecoration: "none", flexGrow: 1 }}
        >
          Artemis
        </Typography>
        <Button color="inherit" component={Link} to="/about">
          About
        </Button>
        <Button color="inherit" component={Link} to="/contact">
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
