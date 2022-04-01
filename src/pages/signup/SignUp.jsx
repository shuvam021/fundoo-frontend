import React from 'react'
import './SignUp.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import GoogleLogo from '../../assets/Google_2015_logo.svg.png';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';



const SignUp = () => {
    return (
        <div className='signup-box'>
            <div className='signup'>
                <div className='signup-header'>
                    <img className='signin-logo' src={GoogleLogo} alt="logo" />
                    <h2>Create your Google Account</h2>
                    <p>to continue to Fundoo</p>
                </div>
                <div className='signup-body'>
                    <div>
                        <TextField
                            id="firstName"
                            label="First Name"
                            variant="outlined"
                            size='small'
                            style={{ width: "47%" }} />
                        <TextField
                            id="lastname"
                            label="Last Name"
                            variant="outlined"
                            size='small'
                            style={{ width: "47%" }} />
                    </div>
                    <div>
                        <TextField
                            fullWidth
                            id="outlined-basic"
                            label="Username"
                            variant="outlined"
                            size='small' />
                    </div>
                    <div>
                        <TextField
                            id="password"
                            label="Password"
                            variant="outlined"
                            size='small'
                            type="password"
                            style={{ width: "47%" }} />

                        <TextField
                            id="confirm"
                            label="Confirm"
                            variant="outlined"
                            size='small'
                            style={{ width: "47%" }} />
                    </div>
                    <div>
                        <FormControlLabel
                            control={<Checkbox />} label="Show password" />

                    </div>
                </div>
                <div className='signup-footer'>
                    <Button
                        size='small'
                    >Sign in instaed</Button>
                    <Button
                        variant="contained"
                        size='small'
                    >SignUp</Button>
                </div>
            </div >
            <div className='signup-right'>
                <img src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" alt="" />
                <p>One account. All of Google working for you.
                </p>
            </div>
        </div>
    )
}

export default SignUp