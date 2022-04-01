import React, { useState } from 'react'
import './SignIn.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import GoogleLogo from '../../assets/Google_2015_logo.svg.png';
import { userSignin } from '../../services/UserService'


const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

const SignIn = () => {
    const [data, setData] = React.useState({ email: '', password: '' })

    const emailMethod = e => {
        setData({ ...data, email: e.target.value })
        console.log(e.target.value);
    }

    const passwordMethod = e => {
        setData({ ...data, password: e.target.value })
        console.log(e.target.value);
    }

    const [emailError, setEmailError] = React.useState(false)
    const [emailHelper, setEmailHelper] = React.useState('')

    const [passwordError, setPasswordError] = React.useState(false)
    const [passwordHelper, setPasswordHelper] = React.useState('')

    const emailValidate = emailRegex.test(data.email)
    const passwordValidate = passwordRegex.test(data.password)

    const onSubmit = () => {
        // validate email
        if (emailValidate == true) {
            setEmailError(false)
            setEmailHelper('')
        }
        else {
            setEmailError(true)
            setEmailHelper('Enter the correct email!!!')
        }

        // validate password
        if (passwordValidate == true) {
            setPasswordError(false)
            setPasswordHelper('')
        }
        else {
            setPasswordError(true)
            setPasswordHelper('Enter the correct password!!!')
        }

        // access login api with validated data
        if (emailValidate === true && passwordValidate === true) {
            userSignin(data)
                .then(res => console.log(res))
                .catch(err => console.log(err))
        }
    }

    return (
        <div className='signin'>
            <div className='signin-header'>
                <img className='signin-logo' src={GoogleLogo} alt="logo" />
                <h2>Sign In</h2>
                <p>Use your Google Account</p>
            </div>
            <div className='signin-body'>
                <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    size='small'
                    onChange={emailMethod}
                    error={emailError}
                    helperText={emailHelper}
                />
                <TextField
                    type="password"
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    size='small'
                    onChange={passwordMethod}
                    error={passwordError}
                    helperText={passwordHelper} />
            </div>
            <div className='signin-footer'>
                <Button color="error" variant="outlined" size='small'>Forget Password</Button>
                <Button variant="outlined" size='small'>Create account</Button>
                <Button variant="contained" size='small' onClick={onSubmit}>SignIn</Button>
            </div>
        </div >
    )
}

export default SignIn