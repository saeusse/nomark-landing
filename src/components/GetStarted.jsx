import React from 'react'
import { 
    Box,
    Grid,
    styled,
    Typography,
} from '@mui/material'
import Title from './Title'
// img
import imgDetail from '../assets/img_1.jpg';
import imgDetail2 from '../assets/img_2.jpg';


const GetStarted = () => {

    const CustomGridItem = styled(Grid) ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    })
    
    const CustomTypography = styled(Typography) ({
        fontSize: '1.1rem',
        textAlign: 'start',
        lineHeight: '1.5',
        color: '#515151',
        marginTop: '1.5rem',
    })

    return (
            
        <Grid container spacing={{ xs: 4, sm: 4, md: 0 }}   
        sx={{
            py: 10,
            px: 2,
             
        }}
        >
            <CustomGridItem item xs={12} sm={8} md={6} 
            component = 'section'
           
            >
                <Box component='article'
                sx={{
                    px: 4,
                }}
                >
                    <Title
                    text={
                        '¡La Marca sos VOS!'
                    }
                    textAlign={'start'}
                    />
                    <CustomTypography>
                    En NoMark, el estilo lo definís vos.<br />
                    Adquiere los Crudos en su versión original y clásica<br />
                    o llevá tu creatividad a otro nivel personalizándolos.
                    </CustomTypography> 
                </Box>

            </CustomGridItem>
            
            <Grid item xs={12} sm={4} md={6}>
                <img src={imgDetail} alt="" 
                style={{
                    width: '100%',
                }}
                />
            </Grid>

            <Grid item xs={12} sm={4} md={6}
            sx={{
                order: {xs: 4, sm: 4, md: 3}
            }}
            >
                <img src={imgDetail2} alt="" 
                style={{ 
                    width: "100%",
                }}
                />
            </Grid>

            <CustomGridItem item xs={12} sm={8} md={6}
            sx={{
                order: {xs: 3, sm: 3, md: 4}
            }}
            >
                <Box component='article'
                sx={{
                    px: 4,
                }}
                >
                    <Title
                    text={
                        '¿Qué es NoMark?'
                        
                    }
                    textAlign={'start'}
                    />
                    <CustomTypography>
                    Somos más que una marca; somos una plataforma. <br />
                    Con NoMark, tenés la libertad de comprar los Crudos o <br />
                    personalizarlos a tu gusto, creando un producto único <br />
                    como vos. 
                    </CustomTypography>
                </Box>
            </CustomGridItem>
        </Grid>
    )
}

export default GetStarted;