import React from "react";
import NoteIcon from "../assets/notes-icon.png"
import {AppBar, Box, Button, Grid, IconButton, InputBase, Toolbar, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
// icons
import MenuIcon from '@mui/icons-material/Menu';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import SearchIcon from '@mui/icons-material/Search';

const useStyle = makeStyles({
    inputBox: {
        alignSelf: "center",
        flexGrow: 2,
        width: "300px",
        backgroundColor: "#dfdfde",
        borderRadius: 5,
        border: "1px solid red",
        '&:focus': {
            backgroundColor: "#bbb",
            border: "1px solid"
        },
    },
    inputField: {
        border: "1px solid blue",
        width: "90%",
        outline: "none",
        // border: "none",
    }
})

export default function Header() {
    const classes = useStyle()
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position={"static"} color={"transparent"}>
                <Toolbar>
                    <Grid container direction="row" justifyContent="center" alignItems="center">
                        <Grid item>
                            <IconButton size="large" edge="start" color="inherit"><MenuIcon/></IconButton>
                            <IconButton><img src={NoteIcon} alt="icon"/></IconButton>
                            <IconButton><Typography style={{display: "inline-block"}}>Notes</Typography></IconButton>
                        </Grid>
                        <Grid item className={classes.inputBox}>
                            <IconButton><SearchIcon/></IconButton>
                            <InputBase
                                placeholder="Search…"
                                className={classes.inputField}/>
                        </Grid>
                        <Grid item>
                            <IconButton><RefreshOutlinedIcon/></IconButton>
                            <IconButton><DnsOutlinedIcon/></IconButton>
                            <IconButton><SettingsOutlinedIcon/></IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton><AppsOutlinedIcon/></IconButton>
                            <Button variant={"outlined"} size={"small"}><Typography>S</Typography></Button>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
