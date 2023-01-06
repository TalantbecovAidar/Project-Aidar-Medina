import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { useAuth } from "../../contexts/authContext";
import { Link, useNavigate } from "react-router-dom";
import { ADMIN } from "../../helpers/consts";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useCart } from "../../contexts/cardContext";
import InstagramIcon from '@mui/icons-material/Instagram';
import { Button } from "@mui/material";





const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));




const pages = [ 
  { name:  "О НАС", link: "/about", id: 1 },
  { name: "МЕНЮ", link: "/products", id: 2 },
  {name:  "ГЛАВНАЯ", link: "/", id:3},

 
  
];

<InstagramIcon/>
 
export default function Navbar() {
  const navigate = useNavigate();
  const { user, handleLogout } = useAuth();
  const {getCart, cart} = useCart()

  React.useEffect(()=>{
    getCart();
  },[])
  

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem
        onClick={() => {
          handleMenuClose();
          navigate("/auth");
        }}
      >
        Профиль
      </MenuItem>
      <MenuItem
        onClick={() => {
          handleLogout();
          handleMenuClose();
        }}
      >
        Выйти
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle sx={{color:"#ffe082"}} />
        </IconButton>
        <p></p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1, }}>
      <AppBar position="static">
        <Toolbar>
      
      
          <Search>
          
       
          </Search>
          {user.email == ADMIN ? (
            <Link
              style={{
                color: "white",
                margin: "0 10px",
                textDecoration: "underline",
              }}
              to="/admin"
            >
              Admin
            </Link>
          ) : null}
          <Box sx={{ display: "flex", gap: "6px",    }}>
            {pages.map((item) => (
              <Link to={item.link}>
                <Typography sx={{ color: "#fdd835" ,  }}>{item.name}</Typography>
              </Link>
            ))}
             
              <Button sx={{backgroundColor:"#ffe082", color:"#f57f17", height:"20px", marginTop:"2px"} }variant="contained" size="small">
          Заказать 
        </Button>

        <InstagramIcon sx={{color:"#ffe082"}}/>
              

              
          </Box >
      <Box  className="navbar">
         <img  className="navbar" src="https://arzu.kg/static/images/general/logo.svg" alt="" />
         </Box>
     
           
        


          <Box sx={{ flexGrow: 1 ,   }} />
         
          {user ? <Box>{user.email}</Box> : <Box sx={{color:"#ffe082"}}>Регистрация</Box>}

          <Box sx={{ display: { xs: "none", md: "flex" } , }}>
           
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              onClick={()=>navigate("/cart")}
            >
              <Badge badgeContent={cart?.products.length} color="error">
              <ShoppingBasketIcon sx={{color:"#ffe082"}}/>
              </Badge>
            </IconButton>

            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle sx={{color:"#ffe082"}} />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } , }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
