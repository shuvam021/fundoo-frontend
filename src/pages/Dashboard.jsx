import React from "react";
import NavBar from "../components/NavBar";
import NoteOne from "../components/NoteOne";
import NoteTwo from "../components/NoteTwo";
import NoteCard from "../components/NoteCard"
import {getNoteData, updateNoteColorData} from "../services/DataService"
import AppDrawer from "../components/AppDrawer";
import {Box, Grid, Container, CssBaseline} from "@mui/material";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles(style => ({
    noteTwo: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
    },
}));

export default function Dashboard() {
    const classes = useStyles();
    const [note, setNote] = React.useState(false);
    const checkNoteBox = () => setNote(true)
    const [notesList, setNoteList] = React.useState([])

    React.useEffect(() => {
        console.log('hello')
        getNoteData()
            .then(res => setNoteList(res.data.data))
            .catch(err => console.log(err))

    }, [note])

    const listenToNoteTwo = ()=>{
        setNote(false)
    }
    const listenToNoteCard = (color)=>{
        // setNote(false)
        console.log(color)
        updateNoteColorData({color: color})
    }

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <NavBar/>
            <AppDrawer/>
            <Container sx={{mt: 8}}>
                <Box className={classes.noteTwo}>
                    {note ? <NoteTwo listenToNoteTwo={listenToNoteTwo}/> : <NoteOne checkNoteBox={checkNoteBox}/>}
                </Box>
                <Grid my={1} spacing={3} container>
                    {notesList.map(
                        item => (<Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                            <NoteCard listenToNoteCard={listenToNoteCard} item={item}/>
                        </Grid>)
                    )}
                </Grid>

            </Container>
        </Box>
    )
}

