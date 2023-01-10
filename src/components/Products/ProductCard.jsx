import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useAuth } from "../../contexts/authContext";
import { ADMIN } from "../../helpers/consts";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useProducts } from "../../contexts/productsContext";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/cardContext";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function ProductCard({ item }) {
  const {addProductToCart, checkProductInCart} = useCart()
  const navigate = useNavigate()
  const { deleteProduct } = useProducts();
  const {
    user: { email },
  } = useAuth();
  // console.log(email);

  return (
    <Card className="card-product" sx={{width:"40%", borderRadius:"10%" , margin:"2% 3%"}}>
      <CardMedia
        sx={{ height: 200, cursor:"pointer" }}
        image={item.picture}
        title="green iguana"
        onClick={()=>navigate(`/products/${item.id}`)}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography
          sx={{ color: "green", fontWeight: "700" }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {item.price}cом
        </Typography>
        <Typography
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "3",
            WebkitBoxOrient: "vertical",
          }}
          variant="body2"
          color="text.secondary"
        >
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        {email == ADMIN ? (
          <>
            <Button onClick={() => deleteProduct(item.id)}>Delete</Button>
            <Button onClick={()=>navigate(`/edit/${item.id}`)} >Edit</Button>
          </>
        ) : (
          <IconButton onClick={()=>addProductToCart(item)} >
            {checkProductInCart(item.id) ? (<><ShoppingCartIcon sx={{color: "brown",}} /></>) : (<><AddShoppingCartIcon /></>)}
          </IconButton>
          
        )}
      </CardActions>
      
    </Card>
    
  );
}

