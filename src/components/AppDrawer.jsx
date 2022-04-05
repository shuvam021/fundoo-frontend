import * as React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import {Link} from "react-router-dom";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop) => prop !== 'open'})(
    ({theme, open}) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function AppDrawer() {
    const menuItems = [
        {icon: <FormatListBulletedIcon/>, path: '/'},
        {icon: <LoginIcon/>, path: '/sign-in'},
        {icon: <PersonAddIcon/>, path: '/sign-up'},
    ]

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <Drawer variant="permanent">
                <DrawerHeader><IconButton><ChevronRightIcon/></IconButton></DrawerHeader>
                <Divider/>
                <List>
                    <Grid container direction='column' justifyContent='center' alignItems="center">
                        {menuItems.map((item, i) => (
                            <Grid item key={i}>
                                <Link to={item.path}>
                                    <IconButton>{item.icon}</IconButton>
                                </Link>
                            </Grid>
                        ))}
                    </Grid>
                </List>
            </Drawer>
        </Box>
);
}