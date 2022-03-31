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


const NoteTwo = () => {
    return (
        <div className="note-two">
            <div className="box">
                <input type="text" placeholder="Title" />
                <input type="text" placeholder="Take a note..." />
                <div className="note-two-actions">
                    <div className="note-two-icons icon-colors">
                        <AddAlertOutlinedIcon />
                        <PersonAddAltIcon />
                        <PaletteOutlinedIcon />
                        <ImageOutlinedIcon />
                        <ArchiveOutlinedIcon />
                        <MoreVertOutlinedIcon />
                        <UndoOutlinedIcon />
                        <RedoOutlinedIcon />
                    </div>
                    <Button variant="text">Close</Button>
                </div>
            </div>
        </div>
    )
}


export default NoteTwo