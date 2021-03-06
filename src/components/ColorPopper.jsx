import * as React from 'react';
import Popper from '@mui/material/Popper';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import IconButton from "@mui/material/IconButton";
import Paper from '@mui/material/Paper';


export default function ColorPopper({colorHandler, action, listenToNoteCard}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    const colors = ["#EBD8C3", '#30AADD', '#EAEA7F', "#A97155", "#8D8DAA", "#FD5D5D", "#3A3845"]
    const setColor = (color) => {
        if (action === "create") {
            colorHandler(color)
        }
        if (action === "update") {
            // colorHandler(color)
            listenToNoteCard(color)
        }
    }

    return (
        <div>
            <IconButton onClick={handleClick} size={"small"}><PaletteOutlinedIcon fontSize={"inherit"}/></IconButton>
            <Popper id={id} open={open} anchorEl={anchorEl} >
                <Paper elevation={5} sx={{py: 1}}>
                    {colors.map(
                        (color, i) => (
                            <IconButton key={i} onClick={() => setColor(color)} variant={"outlined"}
                                        sx={{mx: 1, p: 1, backgroundColor: color, borderRadius: "50%"}}/>)
                    )}
                </Paper>
            </Popper>
        </div>
    );
}