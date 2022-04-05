import React from 'react'
import GoogleLogo from '../assets/Google_2015_logo.svg.png';
import {makeStyles} from "@mui/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {userSignIn} from "../services/UserService";
import {useHistory} from "react-router-dom"


const useStyles = makeStyles({
    googleLogo: {
        height: "auto",
        width: "80px",
    },
    gridContainer: {
        justifyContent: "center",
        alignItems: "center",
        minHeight: '100vh'
    },
    card: {
        padding: 30,
        width: "400px",
        height: "auto",
    },
    controller: {
        display: "flex",
        justifyContent: "space-around"
    },
})

const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[-.+_]?[a-zA-Z0-9]+[@][a-z0-9]+[.][a-z]+[.]?[a-z]+$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

export default function SignIn() {
    const history = useHistory();
    const classes = useStyles();
    const [data, setData] = React.useState({email: '', password: ''})

    const [emailErr, setEmailErr] = React.useState(false)
    const [passwordErr, setPasswordErr] = React.useState(false)

    const emailValidate = emailRegex.test(data.email)
    const passwordValidate = passwordRegex.test(data.password)
    const onSubmit = () => {
        // validate email
        setEmailErr(false)
        setPasswordErr(false)

        // validate password
        if (!emailValidate) { setEmailErr(true)}
        if (!passwordValidate) { setPasswordErr(true) }

        // access login api with validated data
        if (emailValidate && passwordValidate) {
            userSignIn(data)
                .then(
                    res => {
                        localStorage.setItem('access', res.data.access);
                        history.push('/');
                    }
                )
                .catch(err => console.log(err))
        }
    }
    return (
        <Box>
            <Grid container className={classes.gridContainer}>
                <Card className={classes.card}>
                    <Grid item mb={5}>
                        <img className={classes.googleLogo} src={GoogleLogo} alt="logo"/>
                        <Typography variant={"h6"}>Sign In</Typography>
                        <Typography variant={"subtitle1"}>Use your Google Account</Typography>
                    </Grid>
                    <Grid item mb={5} xs={12}>
                        <TextField
                            id="email" label="Email" variant="outlined" size='small'
                            fullWidth sx={{marginBottom: 4}}
                            onChange={e => setData({...data, email: e.target.value})}
                            error={emailErr}
                            helperText={ emailErr?'Enter the correct email!!!': '' }
                        />
                        <TextField
                            type="password" id="password" label="Password" variant="outlined" size='small'
                            fullWidth sx={{marginBottom: 4}}
                            onChange={e => setData({...data, password: e.target.value})}
                            error={passwordErr}
                            helperText={passwordErr ? 'Enter the correct password!!!' : ""}/>
                    </Grid>

                    <Grid item mb={5} className={classes.controller}>
                        <Button color="error" variant="outlined" size='small'>Forget Password</Button>
                        <Button variant="outlined" size='small'>Create account</Button>
                        <Button variant="contained" size='small' onClick={onSubmit}>SignIn</Button>
                    </Grid>
                </Card>
            </Grid>
        </Box>
    )
}
