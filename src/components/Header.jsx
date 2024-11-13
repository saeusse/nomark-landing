import React from 'react';
import { Box, Button, styled, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
// Importa las imágenes correctamente
import headerImg from '../assets/shoes2.png';
import fdoWeb from '../assets/fdo_web.png';

const Header = () => {
    const CustomBox = styled(Box)(({ theme }) => ({
        minHeight: '80vh',
        display: 'flex',
        justifyContent: 'center',
        gap: theme.spacing(2),
        paddingTop: theme.spacing(10),
        // Fondo con imagen
        backgroundColor: 'black',
        backgroundImage: `url(${fdoWeb})`,  
        backgroundSize: 'cover',          
        backgroundPosition: 'center',      
        backgroundRepeat: 'no-repeat',    
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
        },
    }));

    const BoxText = styled(Box)(({ theme }) => ({
        flex: '1',
        paddingLeft: theme.spacing(8),
        [theme.breakpoints.down('md')]: {
            flex: '2',
            textAlign: 'center',
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
    }));

    return (
        <CustomBox component='header'>
            {/*  Box text  */}
            <BoxText component='section'>
                <Typography
                    variant='h2'
                    component='h1'
                    sx={{
                        fontWeight: 700,
                        color: '#fff',
                    }}
                >
                    Diseña, crea y marca tu propio camino.
                </Typography>

                <Typography
                    variant='p'
                    component='p'
                    sx={{
                        py: 3,
                        lineHeight: 1.6,
                        color: '#fff',
                    }}
                >
                    Compra los crudos o personaliza a tu estilo.
                </Typography>

                <Box>
                    <Button
                        variant='contained'
                        sx={{
                            mr: 2,
                            px: 4,
                            py: 1,
                            fontSize: '0.9rem',
                            textTransform: 'capitalize',
                            borderRadius: 0,
                            borderColor: '#14192d',
                            color: '#000000',
                            backgroundColor: '#fff',
                            "&&:hover": {
                                backgroundColor: "#e3e2e1"
                            },
                            "&&:focus": {
                                backgroundColor: "#c9c8c5"
                            }
                        }}
                    >
                        Descarga Ahora
                    </Button>
                </Box>
            </BoxText>

            <Box sx={theme => ({
                [theme.breakpoints.down('md')]: {
                    flex: '1',
                    paddingTop: '30px',
                    alignSelf: 'center',
                },
                [theme.breakpoints.up('md')]: {
                    flex: '2',
                    alignSelf: 'flex-end',
                },
            })}
            >
                <img
                    src={headerImg}
                    alt="headerImg"
                    style={{
                        width: "50%",
                        height: 'auto',
                        marginBottom: -15,
                        position: 'relative',
                        left: '5%',
                        rotate: '0deg',
                        overflowX: 'hidden',
                    }}
                />
            </Box>
        </CustomBox>
    );
}

export default Header;
