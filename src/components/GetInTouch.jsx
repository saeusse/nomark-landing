import React from 'react';
import {  
    Button,
    Stack,
    Box,
} from '@mui/material';
import Title from './Title';
import Paragraph from './Paragraph';
import { Link } from 'react-router-dom';
import shoes from '../assets/shoes.png';

const GetInTouch = () => {

    return (
        <Stack 
        component='section'
        direction="column"
        justifyContent='center'
        alignItems='center'
        sx={{
            py: 10,
            mx: 6,
            position: 'relative',
        }}
        >
            {/* Imagen pequeña de fondo */}
            <Box 
                component="img" 
                src={shoes} 
                alt="shoes" 
                sx={{
                    width: '80%',    
                    height: 'auto',
                    mb: 4,             
                }}
            />

            {/* Contenedor del texto sin fondo negro */}
            <Box
                sx={{
                    padding: 4,
                    borderRadius: 2,
                    textAlign: 'center',
                    maxWidth: '600px', 
                    color: 'gray',     
                }}
            >
                <Title 
                    text={'Tu creatividad al alcance de tu mano.'} 
                    textAlign={'center'}
                />
                <Paragraph 
                    text={
                        'La app de NoMark es tu herramienta para crear, explorar y diseñar sin límites. \
                        '
                    }
                    maxWidth={'sm'}
                    mx={0}
                    textAlign={'center'}
                />
                <Button 
                    component={Link} 
                    to={'/contact'}
                    variant="contained" 
                    type="submit"
                    size="medium"
                    sx={{ 
                        fontSize: '0.9rem',
                        textTransform: 'capitalize', 
                        py: 2,
                        px: 4,
                        mt: 3, 
                        mb: 2,
                        borderRadius: 0,
                        backgroundColor: '#000000',
                        color: '#fff', 
                        "&&:hover": {
                            backgroundColor: "#333333"
                        },
                        "&&:focus": {
                            backgroundColor: "#878787"
                        }
                    }}
                >
                    Descarga la App
                </Button>
            </Box>
        </Stack>
    );
}

export default GetInTouch;
