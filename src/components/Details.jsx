import React from 'react';
import {
    Box,
    Button,
    Stack,
    TextField,
    Grid,
    Typography,
    styled
} from '@mui/material';
import Title from './Title';
import Paragraph from './Paragraph';
import imgDetail from '../assets/img_3.jpg';
import imgDetail2 from '../assets/img_4.jpg';

const Details = () => {
    const CustomBox = styled(Box)(({ theme }) => ({
        minHeight: '80vh',
        display: 'flex',
        justifyContent: 'center',
        gap: theme.spacing(2),
        paddingTop: theme.spacing(10),
        backgroundColor: 'black',
        backgroundImage: `url(${imgDetail})`,  // Fondo de imagen, puede cambiarse según preferencia
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

    const CustomGridItem = styled(Grid)(({ theme }) => ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    }));

    const CustomTypography = styled(Typography)(({ theme }) => ({
        fontSize: '1.1rem',
        textAlign: 'start',
        lineHeight: '1.5',
        color: '#515151',
        marginTop: '1.5rem',
    }));

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            phone: data.get('phone'),
        });
    };

    return (
        <React.Fragment> 
            <Grid container spacing={{ xs: 4, sm: 4, md: 0 }} sx={{ py: 10, px: 2 }}>
                <CustomGridItem item xs={12} sm={8} md={6} component="section">
                    <Box component="article" sx={{ px: 4 }}>
                        <Title text={'¡La app de NoMark !'} textAlign={'start'} />
                        <CustomTypography>
                        Esta es tu herramienta para crear, explorar y diseñar sin límites. Con una interfaz intuitiva y fácil de usar, te permite personalizar cada aspecto de tus tenis: desde los colores y materiales hasta los detalles más finos. Elegí cómo se verá cada parte, probá diferentes combinaciones y hacé ajustes hasta que el resultado refleje tu estilo personal. No se trata solo de diseñar unos tenis, sino de contar una historia única—la tuya.
                        </CustomTypography>
                    </Box>
                </CustomGridItem>

                <Grid item xs={12} sm={4} md={6}>
                    <img src={imgDetail} alt="Detalle 1" style={{ width: '100%' }} />
                </Grid>

                <Grid item xs={12} sm={4} md={6} sx={{ order: { xs: 4, sm: 4, md: 3 } }}>
                    <img src={imgDetail2} alt="Detalle 2" style={{ width: "100%" }} />
                </Grid>

                <CustomGridItem item xs={12} sm={8} md={6} sx={{ order: { xs: 3, sm: 3, md: 4 } }}>
                    <Box component="article" sx={{ px: 4 }}>
                        <Title text={'¿Personalización Completa?'} textAlign={'start'} />
                        <CustomTypography>
                         Cambiá colores, materiales y detalles en tiempo real.<br />
                        Inspiración a Medida: Accedé a ideas de otros diseñadores <br />
                        y descubrí opciones únicas que te pueden inspirar.<br />
                        NoMark app es fácil de usa, Diseñada para todos.<br />
                        </CustomTypography>
                    </Box>
                </CustomGridItem>
            </Grid>

            <Stack component="section" direction="column" justifyContent="center" alignItems="center" sx={{ py: 10, px: 2 }}>
                <Title text={'¡Obten la App de NoMark Antes!'} textAlign={'center'} />
                <Paragraph text={'Déjanos tus datos y podrás acceder a Nomark App,comienza a crear y personanilar tus pasos.  Con Nomark La marca SosVos'} maxWidth={'sm'} mx={0} textAlign={'center'} />

                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, py: 2 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="phone"
                        label="Phone Number"
                        type="phone"
                        id="phone"
                        autoComplete="current-phone"
                    />
                    <Button
                        variant="contained"
                        fullWidth
                        type="submit"
                        size="medium"
                        sx={{
                            fontSize: '0.9rem',
                            textTransform: 'capitalize',
                            py: 2,
                            mt: 3,
                            mb: 2,
                            borderRadius: 0,
                            backgroundColor: '#14192d',
                            "&:hover": {
                                backgroundColor: '#1e2a5a',
                            },
                        }}
                    >
                        Send
                    </Button>
                </Box>
            </Stack>
        </React.Fragment>
    );
}

export default Details;
