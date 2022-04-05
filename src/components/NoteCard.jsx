import React from "react";
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import {Card, CardContent, CardActions, IconButton, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
    iconBox:{
        display: "flex",
        justifyContent: "space-around"
    },
})

export default function NoteCard({item}) {
    const classes = useStyles();
    return (
        <Card variant={"outlined"}>
            <CardContent>
                <Typography sx={{mb: 1}} color="text.secondary" variant={"body1"}>{item.title}</Typography>
                <Typography variant="body2">{item.description}</Typography>
            </CardContent>
            <CardActions className={classes.iconBox}>
                <IconButton size={"small"}><AddAlertOutlinedIcon fontSize={"inherit"}/></IconButton>
                <IconButton size={"small"}><PersonAddAltIcon fontSize={"inherit"}/></IconButton>
                <IconButton size={"small"}><PaletteOutlinedIcon fontSize={"inherit"}/></IconButton>
                <IconButton size={"small"}><ImageOutlinedIcon fontSize={"inherit"}/></IconButton>
                <IconButton size={"small"}><ArchiveOutlinedIcon fontSize={"inherit"}/></IconButton>
                <IconButton size={"small"}><MoreVertOutlinedIcon fontSize={"inherit"}/></IconButton>
            </CardActions>
        </Card>
    )
}