import React from 'react'
import {
    AppBar,
    Toolbar,
    Box,
    List,
    ListItem,
    Typography, 
    styled,
    ListItemButton,
    ListItemText,
} from '@mui/material';
// menu
import DrawerItem from './DrawerItem';
// rotas
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'

// personalizacao
const StyledToolbar = styled(Toolbar) ({
    display: 'flex',
    justifyContent: 'space-between',
});

const ListMenu = styled(List)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.up("sm")] : {
        display: "flex",
    },
}));

//rotas
const itemList = [
    {
      text: "Inicio",
      to: "/" 
    },
    {
      text: "Crudos",
      to: "/about"
    },
    {
        text: "NoMarkApp",
        to: "/contact"
    }
];

const Navbar = () => {
    
    return (
        <AppBar 
        component="nav" 
        position="sticky"
        sx={{ 
            backgroundColor: 'black', 
        }}
        elevation={0}
        >
            <StyledToolbar>
                <img 
                    src={logo} 
                    alt={logo}
                    style={{
                        maxWidth: '64px',
                        aspectRatio: '1/1',
                    }}
                />
                {/* <Typography
                    variant="h6"
                    component="h2"
                >
                    No Mark
                </Typography> */}

                <Box sx={{display: { xs: 'block', sm: 'none' } }}>
                    <DrawerItem /> 
                </Box>
                <ListMenu>
                    {itemList.map( ( item ) => {
                        const { text } = item;
                        return(
                            <ListItem key={text}>
                                <ListItemButton component={Link} to={item.to}
                                sx={{
                                    color: '#fff',
                                    "&:hover": {
                                        backgroundColor: 'transparent',
                                        color: '#fa2dc3',
                                    }
                                }}
                                >
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        )
                    })}
                </ListMenu>
            </StyledToolbar>
        </AppBar>
    )
}

export default Navbar;
