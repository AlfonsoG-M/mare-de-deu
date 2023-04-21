import React from "react";
import { Outlet } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";
import { theme } from "../../../themeConfig";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const drawerWidth = 200;

const Navbar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Box
        display={"flex"}
        flexDirection="column"
        spacing={0}
        justifyContent="center"
        alignItems={"center"}
      >
        <Avatar
          alt="Remy Sharp"
          src={
            "https://res.cloudinary.com/dkwjizhdg/image/upload/v1681989653/Mare%20de%20deu/Mare_de_deu_Logo_dnz02g.jpg"
          }
          onClick={() => navigate("/mare-de-deu")}
          style={{
            cursor: "pointer",
            height: "80px",
            width: "80px",
          }}
        />
      </Box>
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("/")}>
            <ListItemText primary={"Home"} sx={{ color: theme.palette.secondary.main }}/>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("/mare-de-deu")}>
            <ListItemText primary={"Mare de deu"} sx={{ color: theme.palette.secondary.main}}/>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("/horarios")}>
            <ListItemText primary={"Horarios"} sx={{ color: theme.palette.secondary.main}}/>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("/espiritualidad")}>
            <ListItemText primary={"Espiritualidad"} sx={{ color: theme.palette.secondary.main}}/>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("/comunidad")}>
            <ListItemText primary={"Comunidad"} sx={{ color: theme.palette.secondary.main}}/>
          </ListItemButton>
        </ListItem>
      </List>
      <Accordion
      sx={{ backgroundColor: theme.palette.primary.main, border: "none" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ color: theme.palette.secondary.main}}>Sacramentos</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: theme.palette.secondary.main, border: "none" ,padding: 0, color: "white" }}>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/bautismo")}>
              <ListItemText primary={"Bautismo"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/matrimonio")}>
              <ListItemText primary={"Matrimonio"} />
            </ListItemButton>
          </ListItem>
        </AccordionDetails>
      </Accordion>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex"}}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar
          sx={{ gap: "20px", display: "flex", justifyContent: "space-between" }}
        >
          <Box sx={{ color: theme.palette.secondary.main }}>
            <h2>Mare de deu</h2>
          </Box >
          <IconButton
            color="secondary.primary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon color="secondary.primary" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          anchor={"right"}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: theme.palette.primary.main,
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
              backgroundColor: theme.palette.primary.main,
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
          padding: "20px",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          backgroundColor: theme.palette.secondary.primary,
          minHeight: "100vh",
          // marginBottom: "50px"
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Navbar;
