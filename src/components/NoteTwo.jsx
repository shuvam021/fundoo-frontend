import React from "react";
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import Button from '@mui/material/Button';
import {makeStyles} from "@mui/styles";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
// import Grid from "@mui/material/Grid";
import {NoteData} from "../services/DataService"

const useStyles = makeStyles(style => ({
    noteTwo: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
    },
    box: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",

        width: "60%",
        maxWidth: 500,
        justifyContent: "space-around",
        boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
        borderRadius: 10,
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
}));

export default function NoteTwo() {
    const classes = useStyles();

    const [data, setData] = React.useState({title:'', description:	''})
    const submitMethod = ()=>{
        NoteData(data)
            .then(res=> console.log("res", res))
            .catch(err=> console.log("err", err))
    }

    return (
        <Box className={classes.noteTwo}>
            <Box className={classes.box}>
                <input type="text" placeholder="Title" className={classes.field} onChange={e=> setData({...data, title:e.target.value })} />
                <input type="text" placeholder="Take a note..." className={classes.field} onChange={e=> setData({...data, description:e.target.value })}/>
                <Box className={classes.noteTwoActions}>
                    <Box className={classes.noteTwoIcons}>
                        <IconButton><AddAlertOutlinedIcon/></IconButton>
                        <IconButton><PersonAddAltIcon/></IconButton>
                        <IconButton><PaletteOutlinedIcon/></IconButton>
                        <IconButton><ImageOutlinedIcon/></IconButton>
                        <IconButton><ArchiveOutlinedIcon/></IconButton>
                        <IconButton><MoreVertOutlinedIcon/></IconButton>
                        <IconButton><UndoOutlinedIcon/></IconButton>
                        <IconButton><RedoOutlinedIcon/></IconButton>
                    </Box>
                    <Button
                        onClick={submitMethod}
                        variant="text"
                        className={classes.noteTwoButton}
                    >Close</Button>
                </Box>
            </Box>
        </Box>
    )
}

