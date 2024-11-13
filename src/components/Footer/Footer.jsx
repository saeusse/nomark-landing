import React from 'react'
import { 
  Box, 
  Stack, 
  styled, 
  Typography,
} from '@mui/material'
import Link from '@mui/material/Link';
import FooterTitle from './FooterTitle'
import FooterLink from './FooterLink'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import logo from '../../assets/logo.png'; // Asegúrate de que esta sea la ruta correcta

const Footer = () => {

  const StackColumn = styled(Stack)(() => ({
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    gap: 8,
    textAlign: 'center',
  }));

  const BoxRow = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#ededed',
    flex: 1,
    padding: theme.spacing(4, 2),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      gap: 30,
    }
  }));

  return (
    <BoxRow component='footer'>

      {/* Sección de Dirección con logo y texto alineados horizontalmente */}
      <StackColumn>
        <Stack direction="row" alignItems="center" spacing={2}>
          <img src={logo} alt="logo" style={{ width: '80px' }} />
          <Box sx={{ textAlign: 'left' }}>
            <FooterTitle text='Dirección' />
            <FooterLink text='Calle 47b #83c30, Medellín, Colombia' />
            <FooterLink text='+57 301-6387094' />
            <FooterLink text='nomark@apk.com' />
          </Box>
        </Stack>
      </StackColumn>

      {/* Espacio vacío para futura personalización */}
      <StackColumn></StackColumn>

      {/* Sección de Redes Sociales */}
      <StackColumn>
        <FooterTitle text='Nuestras Redes' />
        <Stack 
          direction='row' 
          width='70px'
          maxWidth='100%'
          justifyContent='space-between'
        >
          <Link href="#" variant="body2" 
            sx={{
              color: '#414141',
              "&:hover": { color: '#1c2859' },
            }}
          >
            <InstagramIcon />  
          </Link> 
          <Link href="#" variant="body2" 
            sx={{
              color: '#414141',
              "&:hover": { color: '#1c2859' },
            }}
          >
            <FacebookIcon />
          </Link> 
        </Stack>
        <Typography 
          variant='caption'
          component='p' 
        >
          &copy; 2024 Nomark.
        </Typography>
      </StackColumn>
    </BoxRow>
  );
};

export default Footer;
