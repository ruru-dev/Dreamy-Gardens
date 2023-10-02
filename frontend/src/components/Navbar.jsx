import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import { Divider } from "@mui/material";

export default function Navbar({ user, logoutUser }) {
  return (
    // The sx prop is a shortcut for defining custom styles.
    // The outer curly braces opens up our javascript, while the inner curly braces represents our object creation.
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#9FD3A1" }}>
        <Toolbar>
          <LocalFloristIcon
            fontSize="medium"
            sx={{ mr: 0.75, color: "#FFFAA0" }}
          />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Dreamy Gardens
          </Typography>
          {user && (
            <>
              <Typography mr={1.5}>Hi {user.username.toUpperCase()}</Typography>
              <Divider variant="middle" orientation="vertical" flexItem />
            </>
          )}
          <Link to="/">
            <Button sx={{ color: "common.white" }}>Home</Button>
          </Link>
          <Link to="/gallery">
            <Button sx={{ color: "common.white" }}>Gallery</Button>
          </Link>
          {user && (
            <Link to="/create">
              <Button sx={{ color: "common.white" }}>Create</Button>
            </Link>
          )}
          {user ? (
            <Button sx={{ color: "common.white" }} onClick={() => logoutUser()}>
              Logout
            </Button>
          ) : (
            <Link to="/login">
              <Button sx={{ color: "common.white" }}>Login</Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
