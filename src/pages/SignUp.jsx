import React from 'react'
import GoogleLogo from '../assets/Google_2015_logo.svg.png';
import SideImg from "../assets/account.svg"
import {useHistory} from "react-router-dom";
import {makeStyles} from "@mui/styles";
import {Box, Button, Card, Checkbox, FormControlLabel, Grid, TextField, Typography} from '@mui/material';
import {userSignUp} from '../services/UserService'


const nameRegex = /^[a-zA-Z]{3,}$/
const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[-.+_]?[a-zA-Z0-9]+[@][a-z0-9]+[.][a-z]+[.]?[a-z]+$/
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

const useStyles = makeStyles({
    googleLogo: {height: "auto", width: "80px",},
    gridContainer: {justifyContent: "center", alignItems: "center", height: '100vh'},
    card: {border: "10px solid red", padding: 30, width: 800, height: "60%", display: "flex", flexDirection: "row",},
    cardChild: {
        "&:nth-child(1)": {width: "60%", marginTop: "auto", marginBottom: "auto"},
        "&:nth-child(2)": {width: "40%", marginTop: "auto", marginBottom: "auto"}
    },
    sideImg: {width: "70%"},
    sideTypo: {width: "85%"},
    sideBox: {display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"},
    cardDualField: {display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%",},
    controller: {display: "flex", justifyContent: "space-around"},
});

export default function SignUp() {
    const classes = useStyles();
    const history = useHistory();

    // states
    const [data, setData] = React.useState({first_name: '', last_name: '', email: '', password: ''})
    const [confirmPassword, setConfirmPassword] = React.useState('')

    // field error state
    const [fNameErr, setFNameErr] = React.useState(false)
    const [lNameErr, setLNameErr] = React.useState(false)
    const [emailErr, setEmailErr] = React.useState(false)
    const [passwordErr, setPasswordErr] = React.useState(false)
    const [password2Err, setPassword2Err] = React.useState(false)


    const formSubmit = () => {
        // default field errors
        setEmailErr(false)
        setPasswordErr(false)
        setPassword2Err(false)
        setFNameErr(false)
        setLNameErr(false)

        // Regex
        const firstNameValidate = nameRegex.test(data.first_name)
        const lastNameValidate = nameRegex.test(data.last_name)
        const emailValidate = emailRegex.test(data.email)
        const passwordValidate = passwordRegex.test(data.password)

        // validation
        if (!firstNameValidate) {
            setFNameErr(true)
        }
        if (!lastNameValidate) {
            setLNameErr(true)
        }
        if (!emailValidate) {
            setEmailErr(true)
        }
        if (!passwordValidate) {
            setPasswordErr(true)
        }
        if (confirmPassword !== data.password) {
            setPassword2Err(true)
        }

        // access login api with validated data
        if (firstNameValidate && lastNameValidate && emailValidate && passwordValidate) {
            userSignUp(data).then(res => history.push('/login')).catch(err => console.log(err))
        }
    }

    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" className={classes.gridContainer}>
            <Card className={classes.card} variant={"outlined"}>
                <Box className={classes.cardChild}>
                    <Grid item mb={2}>
                        <img className={classes.googleLogo} src={GoogleLogo} alt="logo"/>
                        <Typography variant={"h6"}>Sign Up</Typography>
                        <Typography variant={"subtitle1"}>Use your Google Account</Typography>
                    </Grid>

                    <Grid item mb={2} className={classes.cardDualField}>
                        <TextField id="firstname" label="First Name" variant="outlined" size='small'
                                   onChange={e => setData({...data, first_name: e.target.value})}
                                   error={fNameErr}
                                   helperText={fNameErr ? "Minimum length should be 3!!!" : ''}/>
                        <TextField id="lastname" label="Last Name" variant="outlined" size='small'
                                   onChange={e => setData({...data, last_name: e.target.value})}
                                   error={lNameErr}
                                   helperText={lNameErr ? "Minimum length should be 3!!!" : ''}/>
                    </Grid>

                    <Grid item mb={2}>
                        <TextField fullWidth id="email" label="Email" variant="outlined" size='small'
                                   onChange={e => setData({...data, email: e.target.value})}
                                   error={emailErr}
                                   helperText={emailErr ? "Enter the correct email!!!" : ''}/>
                    </Grid>

                    <Grid item mb={2} className={classes.cardDualField}>
                        <TextField id="password" type="password" label="Password" variant="outlined" size='small'
                                   onChange={e => setData({...data, password: e.target.value})}
                                   error={passwordErr}
                                   helperText={passwordErr ? 'Enter the correct password!!!' : ''}/>
                        <TextField id="confirm" label="Confirm Password" variant="outlined" size='small'
                                   onChange={e => setConfirmPassword(e.target.value)}
                                   error={password2Err}
                                   helperText={password2Err ? "both password should match" : ''}/>
                    </Grid>

                    <Grid item mb={2} className={classes.controller}>
                        <FormControlLabel control={<Checkbox/>} label="Show password"/>
                        <Button size='small'>Sign in instead</Button>
                        <Button variant="contained" size='small' onClick={formSubmit}>SignUp</Button>
                    </Grid>
                </Box>
                <Box className={classes.cardChild}>
                    <Box className={classes.sideBox}>
                        <img src={SideImg} alt="img" className={classes.sideImg}/>
                        <Typography variant={"body1"} className={classes.sideTypo}>One account. All of Google
                            working for you.</Typography>
                    </Box>
                </Box>
            </Card>
        </Grid>
    )
}