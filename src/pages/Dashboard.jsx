import React from "react";
import AppDrawer from "../components/AppDrawer";
import Header from "../components/Header";
import NoteOne from "../components/NoteOne";
import NoteTwo from "../components/NoteTwo";
import NoteCard from "../components/NoteCard"
import {getNoteData} from "../services/DataService"
import {Box, Grid} from "@mui/material";

export default function Dashboard() {
    const [note, setNote] = React.useState(false);
    const checkNoteBox = () => setNote(true)
    const [notesList, setNoteList] = React.useState([])

    React.useEffect(() => {
        getNoteData().then(res => setNoteList(res.data.data)).catch(err => console.log(err))
    }, [])

    return (
        <Box>
            <AppDrawer/>
            <Header/>
            {note ? <NoteTwo/> : <NoteOne checkNoteBox={checkNoteBox}/>}
            <Grid my={1} spacing={3} container>
                {notesList.map(
                    item => (<Grid item xs={12} sm={6} md={4} lg={3} key={item.id}><NoteCard item={item}/></Grid>)
                )}
            </Grid>
        </Box>
    )
}

