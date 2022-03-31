import React from 'react'
import './SignIn.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import GoogleLogo from '../../assets/Google_2015_logo.svg.png';



const SignIn = () => {
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
                    size='small' />
                <TextField
                    type="password"
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    size='small' />
            </div>
            <div className='signin-footer'>
                <Button
                    color="error"
                    variant="outlined"
                    size='small'>Forget Password</Button>
                <Button
                    variant="outlined"
                    size='small'>Create account</Button>
                <Button
                    variant="contained"
                    size='small'>SignIn</Button>
            </div>
        </div >
    )
}

export default SignIn