import React, { useEffect } from 'react';
import { Grid, Paper, Typography, Box, Button } from '@mui/material'
import { useParams } from 'react-router-dom';
import { useProducts } from '../../contexts/productsContext';

const ProductDetails = () => {
    const {id} = useParams()
    const {getOneProduct, oneProduct} = useProducts()
    useEffect(()=>{
        getOneProduct(id)
    }, []);
    // console.log(oneProduct)
    return (
        <div>
            <Paper SX={{m:3}} elevation={24}>
                <Grid container >
                    <Grid item xs={6} >
                        <img className='picture' src={oneProduct.picture} alt="" />
                    </Grid>
                <Grid item xs={6} >
                    <Typography variant="h3">{oneProduct.name}</Typography>
                    <Typography variant="subtitle1">{oneProduct.type}</Typography>
                    <Typography variant="caption">{oneProduct.price}cом </Typography>
                    <Typography variant="caption">{oneProduct.description}</Typography>
                    <Box>
                       <Button variant="outlined" >Добавить в корзину</Button>
                    </Box>
                </Grid>
             </Grid>
            </Paper>
        </div>
    );
};

export default ProductDetails;