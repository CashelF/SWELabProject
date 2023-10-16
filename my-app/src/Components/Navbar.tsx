import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import ListAltIcon from "@mui/icons-material/ListAlt";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import logoImg from "../images/logoImg.png";
import { Container, styled, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import CustomButton from "./CustomButton";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home } from "@mui/icons-material";

interface MobileMenuState {
  left: boolean;
}

const Navbar: React.FC = () => {
  const [mobileMenu, setMobileMenu] = useState<MobileMenuState>({
    left: false,
  });

  const toggleDrawer = (anchor: string, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === "keydown" //&&
      // (event.type === "Tab" || event.type === "Shift")
    ) {
      return;
    }

    setMobileMenu({ ...mobileMenu, [anchor]: open });
  };

  const list = (anchor: string) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>
          <Link to="/homepage" style={{textDecoration:'none'}}>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
              <Typography sx={{
                paddingLeft: '.5rem'
              }}>
                Home
              </Typography>
            </ListItemIcon>
          </ListItemButton>
          </Link>
        </ListItem>

        <ListItem>
          <Link to="/projects" style={{textDecoration:'none'}}>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
              <Typography sx={{
                paddingLeft: '.5rem'
              }}>
                Projects
              </Typography>
            </ListItemIcon>
          </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  const NavText = styled(Typography)(({ theme }) => ({
    fontSize: "14px",
    color: "#4F5361",
    fontWeight: "bold",
    cursor: "pointer",
    "&:hover": {
      color: "#fff",
    },
  }));

  const NavbarLinksBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    cursor: "pointer",
    display: "none",
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  }));

  const NavbarContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2),
    },
  }));

  const NavbarLogo = styled("img")(({ theme }) => ({
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  return (
    <NavbarContainer>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2.5rem",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CustomMenuIcon onClick={toggleDrawer("left", true)} />
          <Drawer
            anchor="left"
            open={mobileMenu["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
          <Typography sx={{
            color: '#000228',
            fontWeight: '800',
            fontSize: '30px'
          }}>
            Pindepo
          </Typography>
        </Box>

        <NavbarLinksBox>
          <Link to="/homepage" style={{textDecoration:'none'}}>
            <NavText variant="body2">Home</NavText>
          </Link>
          <Link to="/Projects" style={{textDecoration:'none'}}>
          <NavText variant="body2">Projects</NavText>
          </Link>
        </NavbarLinksBox>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <Link to="/" style={{textDecoration:'none'}}>
        <CustomButton
          backgroundColor="#0F1B4C"
          color="#fff"
          buttonText="Logout"
        />
        </Link>
      </Box>
    </NavbarContainer>
  );
};

export default Navbar;
