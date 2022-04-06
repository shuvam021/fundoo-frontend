import React from "react";
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import UndoOutlinedIcon from "@mui/icons-material/UndoOutlined";
import RedoOutlinedIcon from "@mui/icons-material/RedoOutlined";

import {Box, Button, Card, CardActions, CardContent, IconButton, Modal, Typography} from "@mui/material";

import {makeStyles} from "@mui/styles";
import ColorPopper from "./ColorPopper";
import {updateNoteArchiveData, updateNoteData} from "../services/DataService";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    px: 2,
    borderRadius: 2,
};

const useStyles = makeStyles({
    iconBox: {
        display: "flex",
        justifyContent: "space-around"
    },
    box: {
        height: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        width: "100%",
        justifyContent: "space-around",
    },
    noteTwoActions: {
        margin: "20px 0",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
    },
    field: {
        outline: "none",
        border: "none",
        padding: 15,
        fontSize: 16,
    },
    noteTwoIcons: {
        display: "flex",
        flexDirection: "row",
        width: "80%",
        justifyContent: "space-around",
    },
    noteTwoButton: {
        position: "relative",
        right: "10px",
        color: "#666",
    }
})

export default function NoteCard({item}) {
    const [open, setOpen] = React.useState(false);
    const [obj, setObj] = React.useState({})
    const handleOpen = (item) => {
        setOpen(true)
        setObj(item)
    };
    const handleClose = () => setOpen(false);

    const updateColorHandler = (color) => {
        const obj = {...item, color: color}
        updateNoteData(item.id, obj).then(res => console.log(res)).catch(err => console.log(err))
    }
    const updateArchived = () => {
        if (!item.is_archived) {
            updateNoteArchiveData(item.id, {is_archived: true})
                .then(res => console.log(res))
                .catch(err => console.log(err))
        }
    }
    const takeTitle = e => setObj({...obj, title: e.target.value})

    const takeDesc = e => setObj({...obj, description: e.target.value})

    const submitForm = () => {
        updateNoteData(obj.id, obj).then(res => console.log(res)).catch(err => console.log(err))
        handleClose()
    }

    const colorHandler = color => setObj({...obj, color: color})
    const archiveHandler = () => setObj({...obj, is_archived: true})

    const classes = useStyles();
    return (
        <div>
            <Card variant={"outlined"} sx={{backgroundColor: item.color}}>
                <CardContent onClick={() => handleOpen(item)}>
                    <Typography sx={{mb: 1}} color="text.secondary" variant={"body1"}>{item.title}</Typography>
                    <Typography variant="body2">{item.description}</Typography>
                </CardContent>
                <CardActions className={classes.iconBox}>
                    <IconButton size={"small"}><AddAlertOutlinedIcon fontSize={"inherit"}/></IconButton>
                    <IconButton size={"small"}><PersonAddAltIcon fontSize={"inherit"}/></IconButton>
                    <ColorPopper action="update" colorHandler={updateColorHandler}/>
                    <IconButton size={"small"}><ImageOutlinedIcon fontSize={"inherit"}/></IconButton>
                    <IconButton size={"small"} onClick={updateArchived}><ArchiveOutlinedIcon
                        fontSize={"inherit"}/></IconButton>
                    <IconButton size={"small"}><MoreVertOutlinedIcon fontSize={"inherit"}/></IconButton>
                </CardActions>
            </Card>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Box className={classes.box}>
                        <input type="text" placeholder="Title" className={classes.field}
                               value={obj.title} onChange={takeTitle}/>
                        <input
                            className={classes.field} type="text" placeholder="Take a note..."
                            value={obj.description} onChange={takeDesc}/>
                        <Box className={classes.noteTwoActions}>
                            <IconButton size={"small"}><AddAlertOutlinedIcon fontSize={"inherit"}/></IconButton>
                            <IconButton size={"small"}><PersonAddAltIcon fontSize={"inherit"}/></IconButton>
                            <ColorPopper action="create" colorHandler={colorHandler}/>
                            <IconButton size={"small"}><ImageOutlinedIcon fontSize={"inherit"}/></IconButton>
                            <IconButton size={"small"} onClick={archiveHandler}><ArchiveOutlinedIcon
                                fontSize={"inherit"}/></IconButton>
                            <IconButton size={"small"}><MoreVertOutlinedIcon fontSize={"inherit"}/></IconButton>
                            <IconButton size={"small"}><UndoOutlinedIcon fontSize={"inherit"}/></IconButton>
                            <IconButton size={"small"}><RedoOutlinedIcon fontSize={"inherit"}/></IconButton>
                            <Button onClick={submitForm} variant="text" className={classes.noteTwoButton}>Close</Button>
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </div>
    )
}
