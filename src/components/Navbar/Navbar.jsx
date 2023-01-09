import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useAuth } from '../../contexts/authContext';
import { Link, useNavigate } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Badge } from '@mui/material';
import { useCart } from '../../contexts/cardContext';
import { AccountCircle } from '@mui/icons-material';
import { ADMIN } from '../../helpers/consts';







const pages = [ ' MENU',];
const pages1 =[ 'ABOUT US']
const pages2 =["Home Page"]



const settings = ['Profile',];

function Navbar() {
  const navigate = useNavigate(); 
  const { user, handleLogout } = useAuth();
  const [anchorElNav, setAnchorElNav,] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const {getCart, cart} = useCart() 
  
  React.useEffect(()=>{ 
    getCart(); 
  },[]) 

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
       
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          </Typography>
          <a href="https://www.instagram.com/arzu_restaurants/" > <InstagramIcon sx={{color:"#ffe082"}}/></a> 

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={()=>{handleCloseNavMenu();  navigate("/products");} }>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
              {pages1.map((page) => (
                <MenuItem key={page} onClick={()=>{handleCloseNavMenu();  navigate("/auth");} }>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
              {pages2.map((page) => (
                <MenuItem key={page} onClick={()=>{handleCloseNavMenu();  navigate("/");} }>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
             
            </Menu>
          </Box>
          <Box     sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}  > 
       <img  className="navbar" src="https://arzu.kg/static/images/general/logo.svg" alt="" /> 
       </Box> 
          <Typography
      
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={()=>{handleCloseNavMenu();  navigate("/products");} }
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
              
            ))}
            {pages1.map((page) => (
              <Button
             
                key={page}
                onClick={()=>{handleCloseNavMenu();  navigate("/About");} }
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
              
            ))}
            {pages2.map((page) => (
              <Button
                key={page}
                onClick={()=>{handleCloseNavMenu();navigate("/")}}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
              
            ))}
             <Box  className="navbar"> 
       <img  className="navbar" src="https://arzu.kg/static/images/general/logo.svg" alt="" /> 
       </Box> 
          </Box>

          {user.email == ADMIN ? ( 
            <Link 
              style={{ 
                color: "white", 
                margin: "0 10px", 
              
              }} 
              to="/admin" 
            > 
              Admin 
            </Link> 
          ) : null} 
          

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip> 
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={ ()=>{handleCloseUserMenu();  navigate("/auth");  }}>
                  <Typography  textAlign="center">{setting}</Typography>
                </MenuItem>
                
                
                ))}
              
               <MenuItem  
       
       onClick={() => { 
         handleLogout(); 
        }} 
        > 
       Выйти 
     </MenuItem> 
        {user ? <Box>{user.email}</Box> : <Box sx={{color:"black",}}>Авторизация</Box>}
        
            </Menu>
            <IconButton 
          size="large" 
          aria-label="show 17 new notifications" 
          color="inherit" 
          onClick={()=>navigate("/cart")} 
        > 
          <Badge badgeContent={cart?.products.length} color="error"> 
            <ShoppingBasketIcon className='shopping'  /> 
          </Badge> 
        </IconButton> 
       
            
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;