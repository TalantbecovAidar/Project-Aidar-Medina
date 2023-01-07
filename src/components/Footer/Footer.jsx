import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
const Footer = () => {
    return (
        <div>
            <Card  sx={{   width:"100%",backgroundColor:"#F5DEB3" }}>
      <CardContent>
      <Typography sx={{ mb: 1.5, marginTop: "40px", marginLeft: "700px" }} color="text.secondary">
        ARZU STYLE |       
        Наши контакты:0550 69-66-97, 0312 46-06-97
        </Typography>
        <Typography sx={{ mb: 1.5, marginTop: "40px", marginLeft: "700px" }} color="text.secondary">
          ARZU GRAND |
        Наши контакты:0995559999, 0558 58-18-76
        </Typography>
        <Typography sx={{ mb: 1.5, marginTop: "40px", marginLeft: "680px" }} color="text.secondary">
          ARZU Жибек жолу |
        Наши контакты:0558581876, 0508 58-18-76
        </Typography>
        
        <Typography sx={{ mb: 1.5, marginTop: "40px", marginLeft: "660px"  }} color="text.secondary">
          ARZU STYLE |
        Наше местоположение: Бишкек, ул. Тоголок Молдо, 13
        
        </Typography>
        <Typography sx={{ mb: 1.5, marginTop: "40px", marginLeft: "640px"  }} color="text.secondary">
        ARZU GRAND |
        Наше местоположение: Проспект Победы 311 (Лебединовка)
        
        </Typography>
        <EmailIcon sx={{marginLeft: "850px"}}/> arzukg@gmail.com
      </CardContent>
    </Card>
        </div>
    );
};

export default Footer;