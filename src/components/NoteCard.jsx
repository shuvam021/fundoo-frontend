import React from "react";
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import {Card, CardContent, CardActions, IconButton, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import ColorPopper from "./ColorPopper";
import {updateNoteArchiveData, updateNoteData} from "../services/DataService";

const useStyles = makeStyles({
    iconBox:{
        display: "flex",
        justifyContent: "space-around"
    },
})

export default function NoteCard({item}) {
    const updateColorHandler = (color)=>{
        const obj = {...item, color: color}
        updateNoteData(item.id, obj).then(res=> console.log(res)).catch(err=> console.log(err))
    }
    const updateArchived = ()=>{
        if (!item.is_archived){
            updateNoteArchiveData(item.id, {is_archived: true}).then(res=> console.log(res)).catch(err=> console.log(err))
        }
    }

    const classes = useStyles();
    return (
        <Card variant={"outlined"} sx={{backgroundColor: item.color}}>
            <CardContent>
                <Typography sx={{mb: 1}} color="text.secondary" variant={"body1"}>{item.title}</Typography>
                <Typography variant="body2">{item.description}</Typography>
            </CardContent>
            <CardActions className={classes.iconBox}>
                <IconButton size={"small"}><AddAlertOutlinedIcon fontSize={"inherit"}/></IconButton>
                <IconButton size={"small"}><PersonAddAltIcon fontSize={"inherit"}/></IconButton>
                <ColorPopper action="update" colorHandler={updateColorHandler}/>
                <IconButton size={"small"}><ImageOutlinedIcon fontSize={"inherit"}/></IconButton>
                <IconButton size={"small"} onClick={updateArchived}><ArchiveOutlinedIcon fontSize={"inherit"}/></IconButton>
                <IconButton size={"small"}><MoreVertOutlinedIcon fontSize={"inherit"}/></IconButton>
            </CardActions>
        </Card>
    )
}