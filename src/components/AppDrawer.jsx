import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import {Link} from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";

export default function AppDrawer() {
    const menuItems = [
        {icon: <FormatListBulletedIcon/>, title: "Home", path: '/'},
        {icon: <LoginIcon/>, title: "Sign In", path: '/sign-in'},
        {icon: <PersonAddIcon/>, title: "Sign Up", path: '/sign-up'},
    ]
    const drawerWidth = "5vw";

    return (
        <Drawer variant="permanent" sx={{
            width: drawerWidth,
            minWidth: drawerWidth,
            maxWidth: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {width: drawerWidth, boxSizing: 'border-box'},
        }}>
            <Toolbar/>
            <Box sx={{overflow: 'auto'}}>
                <List>
                    {menuItems.map((item, i) => (
                        <Link to={item.path}>
                            <ListItem button key={i} sx={{backgroundColor:"rgba(0,0,0,.1)", marginBottom:1}}>
                                <ListItemIcon  sx={{mx:"auto"}}>{item.icon}</ListItemIcon>
                                <Divider />
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
}