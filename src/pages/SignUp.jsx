import React from 'react'
import GoogleLogo from '../assets/Google_2015_logo.svg.png';
import SideImg from "../assets/account.svg"
import {useHistory} from "react-router-dom";
import {Box, Button, Checkbox, Container, FormControlLabel, Grid, TextField, Typography} from '@mui/material';
import {userSignUp} from '../services/UserService'


const nameRegex = /^[a-zA-Z]{3,}$/
const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[-.+_]?[a-zA-Z0-9]+[@][a-z0-9]+[.][a-z]+[.]?[a-z]+$/
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

const customStyles = {
    container: {
        border: "1px solid", position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)", borderRadius: 1,
    },
    boxContainer: {
        mt: 3, mb: 3, display: "flex",
        flexDirection: "column", justifyContent: "center", alignItems: "center",
    },
    containerOne: {display: "flex", justifyContent: "center", alignContent: "center",},
    boxForm: {mt: 3, mb: 3},
    formLogo: {height: 30},
    boxRightContainer: {display: {md: "block", sm: "none", xs: "none"}, mt: "auto", mb: "auto",},
    boxRight: {
        display: "flex", flexDirection: "column", justifyContent: "center",
        alignItems: "center", height: "auto", width: "90%"
    },
    rightSideImg: {height: 200},
};


export default function SignUp() {
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
        <Container component={"main"} maxWidth={"md"} sx={customStyles.container}>
            <Box sx={customStyles.boxContainer}>
                <Grid container>
                    <Grid item lg={8} md={8} sm={12} xs={12} sx={customStyles.containerOne}>
                        <Box component={"form"} maxWidth={"sm"} sx={customStyles.boxForm}>
                            <Box component={"img"} alt="Google Img" src={GoogleLogo} sx={customStyles.formLogo}/>
                            <Typography variant={"h6"}>Sign Up</Typography>
                            <Typography variant={"subtitle1"}>Use your Google Account</Typography>

                            <Grid container spacing={2} sx={{mt: 1}}>
                                <Grid item sm={6} xs={12}>
                                    <TextField
                                        fullWidth
                                        label="First Name"
                                        variant="outlined"
                                        size="small"
                                        onChange={e => setData({...data, first_name: e.target.value})}
                                        error={fNameErr}
                                        helperText={fNameErr ? "Minimum length should be 3!!!" : ''}
                                    />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Last Name"
                                        variant="outlined"
                                        size="small"
                                        onChange={e => setData({...data, last_name: e.target.value})}
                                        error={lNameErr}
                                        helperText={lNameErr ? "Minimum length should be 3!!!" : ''}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Email"
                                        variant="outlined"
                                        size="small"
                                        onChange={e => setData({...data, email: e.target.value})}
                                        error={emailErr}
                                        helperText={emailErr ? "Enter the correct email!!!" : ''}
                                    />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Password"
                                        variant="outlined"
                                        size="small"
                                        onChange={e => setData({...data, password: e.target.value})}
                                        error={passwordErr}
                                        helperText={passwordErr ? 'Enter the correct password!!!' : ''}
                                    />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Confirm Password"
                                        variant="outlined"
                                        size="small"
                                        onChange={e => setConfirmPassword(e.target.value)}
                                        error={password2Err}
                                        helperText={password2Err ? "both password should match" : ''}
                                    />
                                </Grid>

                                <Grid item sm={4} xs={12}>
                                    <FormControlLabel control={<Checkbox/>} label="Show password"/>
                                </Grid>
                                <Grid item sm={4} xs={6}>
                                    <Button size="small">Sign in instead</Button>
                                </Grid>
                                <Grid item sm={4} xs={6}>
                                    <Button variant="contained" size="small" onClick={formSubmit}>SignUp</Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item lg={4} md={4} sx={customStyles.boxRightContainer}>
                        <Box sx={customStyles.boxRight}>
                            <Box component={"img"} src={SideImg} alt="img" sx={customStyles.rightSideImg}/>
                            <Typography variant={"body1"}>One account. All of Google working for you.</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}