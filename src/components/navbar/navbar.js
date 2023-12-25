import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Paper,
  colors,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../lexer-logo.svg";
import "@fortawesome/fontawesome-free/css/all.css";
import { useState } from "react";
import "./navbar.css";

export default function NavBar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="navbar">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={toggleSidebar}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              <img src={logo} />
            </Typography>

            <Box sx={{ flexGrow: 1 }} />
            <div
              className="connect-icon"
              style={{
                border: "2px solid grey",
                borderRadius: "20px",
                padding: "0.5% 1%",
              }}
            >
              <i
                className="fa-solid fa-wallet"
                style={{ color: "white", marginRight: "10px" }}
              />
              Connect
            </div>
          </Toolbar>
        </AppBar>
      </Box>

      {/* Sidebar */}
      <Drawer anchor="left" open={isSidebarOpen} onClose={toggleSidebar}>
        <Paper className="sidebar" style={{backgroundColor:"rgba(1, 1, 52, 0.9)"}}>
          <List>
            <ListItem>
              <img src={logo} alt="logo"/>
            </ListItem>
            <ListItem>
              <Link to="/lexer-clone" style={{textDecoration:'none',color:'white'}}>
              <ListItemText primary="Dashboard" />
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/lexstake" style={{textDecoration:'none',color:'white'}}>
              <ListItemText primary="LexStake" />
              </Link>
            </ListItem>
          </List>
        </Paper>
      </Drawer>
      {/* <FontAwesomeIcon icon={faWallet} /> */}
    </div>
  );
}
