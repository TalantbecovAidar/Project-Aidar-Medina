import "./home.css"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import EmailIcon from '@mui/icons-material/Email';

export default function ActionAreaCard() {
    const bull = (
        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
          •
        </Box>
      );
  return (
    <Box className="all"> 
        <div className="box">
            <Card className="card" sx={{ maxWidth: 320, borderRadius: "20px", marginLeft: "20px  "}}>
      <CardActionArea className="arzu">
        <CardMedia 
          component="img"
          height="200"
          image="https://arzu.kg/static/images/content/restaurant-2.jpg"
          alt="ARZU Жибек Жолу"
        />
        <CardContent>
          <Typography  gutterBottom variant="h5" component="div" sx={{  color: "#fdd835", marginLeft: "50px", marginTop: "20px"}}>
          ARZU Жибек Жолу
          </Typography>
          <Typography className="next" variant="body2" color="text.secondary" sx={{fontWeight:600, marginTop: "50px", marginLeft: "18px", fontSize: "18px"}}>
          Ресторан с 9 роскошными VIP-залами, залом А-ля карт на 200 мест, чудесной летней площадкой и детской зоной
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card className="card" sx={{ maxWidth: 320, borderRadius: "20px", marginLeft: "50px", height:450 }}>
      <CardActionArea className="arzu2">
        <CardMedia
        className="image"
          component="img"
          image="https://arzu.kg/static/images/content/restaurant-1.jpg"
          alt="ARZU Жибек Жолу"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ color: "#fdd835", marginLeft: "50px", marginTop: "20px"}}>
          ARZU STYLE
          </Typography>
          <Typography className="next" variant="body2" color="text.secondary" sx={{fontWeight:600, marginTop: "30px", marginLeft: "18px", fontSize: "18px"}}>
          Кафе с двумя залами, тремя VIP-кабинками, двухуровневой летней площадкой и детской комнатой с няней
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card className="card" sx={{ maxWidth: 320, borderRadius: "20px", marginLeft: "50px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://arzu.kg/static/images/content/restaurant-3.jpg "
          alt="ARZU Жибек Жолу"
        />
        <CardContent>
          <Typography  gutterBottom variant="h5" component="div" sx={{ color: "#fdd835", marginLeft: "50px", marginTop: "20px"}} >
          ARZU GRAND
          </Typography>
          <Typography className="next" variant="body2" color="text.secondary" sx={{fontWeight:600, marginTop: "50px", marginLeft: "18px", fontSize: "18px"}}>
          Банкетный зал для торжеств класса «люкс» вместимостью до 500 человек
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
        
    <div className="card2" ><Card   sx={{   width:"80%", margin:"6% 10%", borderRadius: "20px" }}>
      <CardContent >
      <Typography sx={{ mb: 1.5, marginTop: "40px", marginLeft: "20px" }} color="text.secondary">
        Мы принимаем заказы на проведение мероприятий для компаний от 8 до 500 человек. Составим меню и организуем для вас банкет, свадьбу и любой другой праздник так, что он составит наилучшие воспоминания.
        </Typography>
        <Typography sx={{ mb: 1.5, marginTop: "40px", marginLeft: "20px"  }} color="text.secondary">
        Наши повара удивят вас своим мастерством, официанты — отличным сервисом, а интерьер — красотой и уютом.
        </Typography>
      </CardContent>
      </Card></div>
    
    
   </Box>
    

   
    
  ); 
}

