import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, NavLink } from "react-router-dom";
import "./index.scss";
export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/*  */}

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link className="link" to="/admin">
              Home
            </Link>
          </Typography>
          {/* Menu*/}
          <NavLink className="link" to="/admin/user">
            <Button color="inherit">User</Button>
          </NavLink>
          <NavLink className="link" to="/admin/book">
            <Button color="inherit">Book</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
