import React from 'react';
// mui
import { Typography, Box, Stack, Grid } from "@mui/material";
// components
import Title from './Title';
import Paragraph from './Paragraph';

// Importar las imágenes desde la carpeta local
import image1 from '../assets/img_5.jpg';
import image2 from '../assets/img_6.jpg';
import image3 from '../assets/img_7.jpg';
import image4 from '../assets/img_8.jpg';

const Gallery = () => {
    const imageData = [
        {
            alt: 'image1',
            url: image1 
        },
        {
            alt: 'image2',
            url: image2 
        },
        {
            alt: 'image3',
            url: image3 
        },
        {
            alt: "image4",
            url: image4 
        },
    ];

    return (
        <Stack
            direction='column'
            justifyContent='center'
            alignItems='center'
            sx={{
                py: 8,
                px: 2,
                display: { xs: 'flex' },
            }}
        >
            <Box
                component='section'
                sx={{
                    paddingBottom: 3,
                }}
            >
                <Title
                    text='"Haz parte de esta Marca"'
                    textAlign={'center'}
                />
                <Typography
                    variant='h5'
                    component='h4'
                    align='center'
                    sx={{
                        paddingTop: 1,
                    }}
                >
                    {/* Additional Text can be added here if needed */}
                </Typography>
                <Paragraph
                    text={'Somos No Mark, donde la marca sos vos.'}
                    maxWidth={'sm'}
                    mx={'auto'}
                    textAlign={'center'}
                />
            </Box>

            <Box sx={{ maxWidth: 700, width: '100%' }}>
                {/* Usando Grid de Material UI para mostrar las imágenes en 2 columnas y 2 filas */}
                <Grid container spacing={2} justifyContent="center">
                    {imageData.map((image, index) => (
                        <Grid item xs={6} key={index}>
                            <img
                                src={image.url}
                                alt={image.alt}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: '8px',
                                }}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Stack>
    );
};

export default Gallery;
