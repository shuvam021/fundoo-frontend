import React from "react";
import "./Dashboard.css"
import Header from "../../components/header/header";
import NoteOne from "../../components/note-one/NoteOne";
import NoteTwo from "../../components/note-two/NoteTwo";



const Dashboard = () => {
    return (
        <div>
            <Header />
            <NoteOne />
            <NoteTwo />
        </div>
    )
}

export default Dashboard