import React from 'react';
import { Typography, Card, CardContent, Box } from '@mui/material';
// components
import Title from './Title';
import Paragraph from './Paragraph';
import bannerImage from '../assets/bannercrudos.jpg'; // Ruta de la imagen del banner

const Content = () => {
  return (
    <React.Fragment>
      {/* Banner de la parte superior */}
      <Box
        sx={{
          width: '100%',
          height: '300px',
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Contenido principal */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          py: 10,
          px: 2,
        }}
      >
        <Title text={'Nuestros Crudos son la estrella del show'} textAlign={'start'} />
        <Typography
          variant='h6'
          component='h4'
          sx={{
            fontWeight: '400',
            paddingTop: 1,
          }}
        >
          
        </Typography>
        <Paragraph
          text={
            'Nuestros tenis crudos son la base perfecta para cualquier estilo, ofreciendo una versatilidad que se adapta a diversas preferencias. Con su diseño clásico y minimalista, estos tenis son ideales para aquellos que aprecian la simplicidad, pero también son perfectos para quienes buscan algo único. Están listos para cualquier ocasión, ya sea un look casual diario o un toque especial para un evento único.Lo mejor de todo es que, con la Nomark App, tienes la oportunidad de personalizar tus tenis de acuerdo a tu estilo y personalidad. La app te permite elegir entre una variedad de opciones de colores, materiales y detalles, brindándote la libertad de diseñar un par de tenis completamente único. Desde la elección de los tonos que más te representan hasta la adición de elementos que reflejan tu creatividad, Nomark App convierte la experiencia de compra en un proceso emocionante y completamente a tu medida.Así, nuestros tenis no solo se ajustan a lo esencial, sino que también se convierten en una extensión de tu identidad, permitiéndote tener un producto que realmente te pertenece. Ya sea que busques algo sencillo o una obra personalizada, Nomark tiene la base perfecta para comenzar tu propio diseño y destacar tu individualidad.'
          }
          maxWidth={'75%'}
          mx={0}
          textAlign={'start'}
        />

        {/* Cards para las facilidades del producto */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 2,
            mt: 5,
          }}
        >
          <Card
            square={true}
            sx={{
              minHeight: 200,
              width: '250px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              border: '1px solid #ccc',
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                component="p"
                sx={{
                  fontWeight: 700,
                  textTransform: 'capitalize',
                }}
              >
                ECONÓMICOS
              </Typography>
            </CardContent>
          </Card>

          <Card
            square={true}
            sx={{
              minHeight: 200,
              width: '250px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              border: '1px solid #ccc',
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                component="p"
                sx={{
                  fontWeight: 700,
                  textTransform: 'capitalize',
                }}
              >
                ELEGANTES
              </Typography>
            </CardContent>
          </Card>

          <Card
            square={true}
            sx={{
              minHeight: 200,
              width: '250px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              border: '1px solid #ccc',
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                component="p"
                sx={{
                  fontWeight: 700,
                  textTransform: 'capitalize',
                }}
              >
                PERSONALIZABLES
              </Typography>
            </CardContent>
          </Card>

          <Card
            square={true}
            sx={{
              minHeight: 200,
              width: '250px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              border: '1px solid #ccc',
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                component="p"
                sx={{
                  fontWeight: 700,
                  textTransform: 'capitalize',
                }}
              >
                MINIMALISTAS
              </Typography>
            </CardContent>
          </Card>

          <Card
            square={true}
            sx={{
              minHeight: 200,
              width: '250px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              border: '1px solid #ccc',
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                component="p"
                sx={{
                  fontWeight: 700,
                  textTransform: 'capitalize',
                }}
              >
                CÓMODOS
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Content;
