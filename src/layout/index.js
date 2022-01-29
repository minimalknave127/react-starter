import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Outlet, useLocation } from "react-router";
import { sections } from "./sections.layout";
import NavItem from "./item.layout";
import { Container, Button } from "@mui/material";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
 
const drawerWidth = 240;

function LayoutNav(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  function logout(){
    signOut(auth);
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const location = useLocation();

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <Box sx={{ p: 2 }}>
        {sections.map((section) => (
          <NavItem
            key={section.title}
            pathname={location.pathname}
            {...section}
          />
        ))}
      </Box>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        variant="elevation"
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", mx: 2}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Intranet
          </Typography>
        </Toolbar>
        <Box>
          <Button onClick={logout} >Odhlásit se</Button>
        </Box>
        </Box>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          pt: 18,
        }}
      >
        <Container>
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
}

LayoutNav.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default LayoutNav;
