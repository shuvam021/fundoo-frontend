import React from 'react'
import './SignUp.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import GoogleLogo from '../../assets/Google_2015_logo.svg.png';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { userSignUp } from '../../services/UserService'


const nameRegex = /^[a-zA-Z]{3,}$/
const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[-.+_]?[a-zA-Z0-9]+[@][a-z0-9]+[.][a-z]+[.]?[a-z]+$/
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;


const SignUp = () => {
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
        // default feild errors
        setEmailErr(false)
        setPasswordErr(false)
        setPassword2Err(false)
        setFNameErr(false)
        setLNameErr(false)

        const firstNameValidate = nameRegex.test(data.first_name)
        const lastNameValidate = nameRegex.test(data.last_name)
        const emailValidate = emailRegex.test(data.email)
        const passwordValidate = passwordRegex.test(data.password)

        // validation
        if (!firstNameValidate){setFNameErr(true)}
        if (!lastNameValidate){setLNameErr(true)}
        if (!emailValidate) {setEmailErr(true)}
        if (!passwordValidate ) {setPasswordErr(true)}
        if (confirmPassword !== data.password){setPassword2Err(true)}

        // access login api with validated data
        if (firstNameValidate && lastNameValidate && emailValidate && passwordValidate) {
            userSignUp(data).then(res => console.log(res)).catch(err => console.log(err))
        }
    }

    return (
        <div className='signup-box'>
            <div className='signup'>
                <div className='signup-header'>
                    <img className='signin-logo' src={GoogleLogo} alt="logo"/>
                    <h2>Create your Google Account</h2>
                    <p>to continue to Fundoo</p>
                </div>
                <div className='signup-body'>
                    <div>
                        <TextField
                            label="First Name"
                            variant="outlined"
                            size='small'
                            error={fNameErr}
                            helperText={fNameErr?"Minmum length should be 3!!!":''}
                            onChange={e=>setData({...data, first_name: e.target.value})}
                            style={{width: "47%"}}/>
                        <TextField
                            label="Last Name"
                            variant="outlined"
                            size='small'
                            error={lNameErr}
                            helperText={lNameErr?"Minimum length should be 3!!!":''}
                            onChange={e=>setData({...data, last_name: e.target.value})}
                            style={{width: "47%"}}/>
                    </div>
                    <div>
                        <TextField
                            fullWidth
                            label="Username"
                            variant="outlined"
                            error={emailErr}
                            helperText={emailErr?"Enter the correct email!!!":''}
                            onChange={e => {setData({...data, email: e.target.value})}}
                            size='small'/>
                    </div>
                    <div>
                        <TextField
                            label="Password"
                            variant="outlined"
                            size='small'
                            type="password"
                            error={passwordErr}
                            helperText={passwordErr? 'Enter the correct password!!!': ''}
                            onChange={e => setData({...data, password: e.target.value})}
                            style={{width: "47%"}}/>

                        <TextField
                            label="Confirm"
                            variant="outlined"
                            size='small'
                            onChange={e=> setConfirmPassword(e.target.value)}
                            error={password2Err}
                            helperText={password2Err? "both password should match": ''}
                            style={{width: "47%"}}/>
                    </div>
                    <div>
                        <FormControlLabel control={<Checkbox/>} label="Show password"/>
                    </div>
                </div>
                <div className='signup-footer'>
                    <Button size='small'>Sign in instaed</Button>
                    <Button variant="contained" size='small' onClick={formSubmit}>SignUp</Button>
                </div>
            </div>
            <div className='signup-right'>
                <img src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" alt=""/>
                <p>One account. All of Google working for you.</p>
            </div>
        </div>
    )
}

export default SignUp