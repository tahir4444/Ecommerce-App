import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  Container,
  Grid,
  Typography,
  Button,
  Box,
  CircularProgress,
  Rating,
  Divider,
  TextField,
  Snackbar,
  Alert,
} from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import axios from 'axios';
import { addToCart } from '../store/cartSlice';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/products/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch product details');
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    dispatch(addToCart({
      id: product._id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity,
    }));

    setSnackbar({
      open: true,
      message: 'Product added to cart!',
      severity: 'success',
    });
  };

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value);
    if (value > 0 && value <= product.stock) {
      setQuantity(value);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error || !product) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
        <Typography color="error">{error || 'Product not found'}</Typography>
      </Box>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={4}>
        {/* Product Images */}
        <Grid item xs={12} md={6}>
          <Box sx={{ mb: 2 }}>
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '500px',
                objectFit: 'contain',
              }}
            />
          </Box>
          <Grid container spacing={1}>
            {product.images.map((image, index) => (
              <Grid item key={index} xs={3}>
                <Box
                  component="img"
                  src={image}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  sx={{
                    width: '100%',
                    height: '80px',
                    objectFit: 'cover',
                    cursor: 'pointer',
                    border: index === selectedImage ? '2px solid #1976d2' : 'none',
                  }}
                  onClick={() => setSelectedImage(index)}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Product Details */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="h1" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5" color="primary" gutterBottom>
            ${product.price.toFixed(2)}
          </Typography>
          <Box sx={{ my: 2 }}>
            <Rating value={product.averageRating} readOnly precision={0.5} />
            <Typography variant="body2" color="text.secondary">
              ({product.ratings.length} reviews)
            </Typography>
          </Box>
          <Typography variant="body1" paragraph>
            {product.description}
          </Typography>
          <Box sx={{ my: 3 }}>
            <Typography variant="subtitle1" gutterBottom>
              Stock: {product.stock} units
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Category: {product.category.name}
            </Typography>
          </Box>
          <Divider sx={{ my: 2 }} />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <TextField
              type="number"
              label="Quantity"
              value={quantity}
              onChange={handleQuantityChange}
              inputProps={{ min: 1, max: product.stock }}
              sx={{ width: '100px' }}
            />
            <Button
              variant="contained"
              startIcon={<AddShoppingCart />}
              onClick={handleAddToCart}
              disabled={product.stock === 0}
              fullWidth
            >
              Add to Cart
            </Button>
          </Box>
          {product.stock === 0 && (
            <Typography color="error">
              This product is currently out of stock
            </Typography>
          )}
        </Grid>
      </Grid>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ProductDetail; 