import React from "react";

import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';

const NoteOne = () => {
    return (
        <div>
            <div className="note-one">
                <div className="box">
                    <div className="input">
                        <input type="text" placeholder="Take a note..." />
                    </div>
                    <div className="box-icons icon-colors">
                        <CheckBoxOutlinedIcon />
                        <BrushOutlinedIcon />
                        <ImageOutlinedIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default NoteOne