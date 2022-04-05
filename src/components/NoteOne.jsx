import React from "react";

import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import Box from "@mui/material/Box";
import {makeStyles} from "@mui/styles";
import IconButton from "@mui/material/IconButton";

const useStyles = makeStyles(theme => ({
    noteOne: {
        height: 60,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: 50
    },
    box: {
        height: 50,
        width: "60%",
        borderRadius: 10,
        maxWidth: 500,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        boxShadow: "0 3px 10px rgba(0,0,0, 0.2)",
    },
    inputCl: {
        width: "100%",
        outline: "none",
        border: "none",
        padding: 15,
        fontSize: 16,
    },
    boxIcons: {
        // flexGrow: 1,
        display: "flex",
        justifyContent: "space-evenly",
        color: "#666",
    },
}));
export default function NoteOne({checkNoteBox}) {
    const classes = useStyles();
    const switchNoteBox = ()=>checkNoteBox();
    return (
        <Box
            onClick={switchNoteBox}>
            <Box className={classes.noteOne}>
                <Box className={classes.box}>
                    <Box className={classes.input}>
                        <input className={classes.inputCl} type="text" placeholder="Take a note..."/>
                    </Box>
                    <Box className={classes.boxIcons}>
                        <IconButton><CheckBoxOutlinedIcon/></IconButton>
                        <IconButton><BrushOutlinedIcon/></IconButton>
                        <IconButton><ImageOutlinedIcon/></IconButton>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}


