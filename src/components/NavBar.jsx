import React from "react";
import NoteIcon from "../assets/notes-icon.png"
import {AppBar, Grid, IconButton, InputBase, Toolbar, Typography} from "@mui/material";
// icons
import MenuIcon from '@mui/icons-material/Menu';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import SearchIcon from '@mui/icons-material/Search';
import Box from "@mui/material/Box";

export default function NavBar() {
    return (
        <AppBar position="fixed" color={"transparent"}
                sx={{zIndex: (theme) => theme.zIndex.drawer + 1, height: "auto"}}>
            <Toolbar sx={{color:"#666", backgroundColor: "#fff"}}>
                <Grid container direction="row" alignItems={"center"}>
                    <Grid item lg={2} md={2} sm={3} xs={4}>
                        <Grid container direction={"row"} spacing={1} justifyContent={"center"} alignItems={"center"}>
                            <Grid item><IconButton size="small" edge="start"
                                                   color="inherit"><MenuIcon/></IconButton></Grid>
                            <Grid item><Box component={"img"} src={NoteIcon} alt="icon"/></Grid>
                            <Grid item><Typography style={{display: "inline-block"}}>Notes</Typography></Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={10} md={10} sm={9} xs={8}>
                        <Grid container justifyContent="center" alignItems="center">
                            <Grid item md={8} sm={2} sx={{display: {xs: "none", sm: "block", md: "block"}}}
                                  maxWidth={"sm"}>
                                <Grid container direction="row" alignItems="center" justifyContent="space-between"
                                      maxWidth={"sm"}
                                      sx={{backgroundColor: {md: "#bbb", lg: "#bbb"}}}>
                                    <Grid item lg={1} md={1}><IconButton><SearchIcon/></IconButton></Grid>
                                    <Grid item lg={11} md={11} width={"100%"}
                                          sx={{display: {xs: "none", sm: "none", md: "block", lg: "block"}}}>
                                        <InputBase placeholder="Search…" sx={{width: "100%"}}/>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item sm={10} md={4} xs={10}>
                                <Grid container justifyContent={"center"}>
                                    <Grid item sm={6} md={8} sx={{display: {sm: "block", xs: "none"}}}>
                                        <IconButton><RefreshOutlinedIcon/></IconButton>
                                        <IconButton><DnsOutlinedIcon/></IconButton>
                                        <IconButton><SettingsOutlinedIcon/></IconButton>
                                    </Grid>
                                    <Grid item sm={6} md={4}>
                                        <IconButton><AppsOutlinedIcon/></IconButton>
                                        <IconButton size={"small"} variant={"outlined"} sx={{
                                            backgroundColor: "green",
                                            color: "#fff",
                                            borderRadius: "50%",
                                            py: .7,
                                            px: 1.6
                                        }}><Typography>S</Typography></IconButton>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
