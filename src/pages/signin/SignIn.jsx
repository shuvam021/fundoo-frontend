import React from 'react'
import './SignIn.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import GoogleLogo from '../../assets/Google_2015_logo.svg.png';
import { userSignIn } from '../../services/UserService'


const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[-.+_]?[a-zA-Z0-9]+[@][a-z0-9]+[.][a-z]+[.]?[a-z]+$/
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

const SignIn = () => {
    const [data, setData] = React.useState({ email: '', password: '' })

    const emailMethod = e => {setData({ ...data, email: e.target.value })}
    const passwordMethod = e => {setData({ ...data, password: e.target.value })}

    const [emailErr, setEmailErr] = React.useState(false)
    const [emailHelper, setEmailHelper] = React.useState('')

    const [passwordErr, setPasswordErr] = React.useState(false)
    const [passwordHelper, setPasswordHelper] = React.useState('')

    const emailValidate = emailRegex.test(data.email)
    const passwordValidate = passwordRegex.test(data.password)

    const onSubmit = () => {
        // validate email
        setEmailErr(false)
        setPasswordErr(false)

        // validate password
        if (!emailValidate) {
            setEmailErr(true)
            setEmailHelper('Enter the correct email!!!')
        }
        if (!passwordValidate) {
            setPasswordErr(true)
            setPasswordHelper('Enter the correct password!!!')
        }

        // access login api with validated data
        if (emailValidate && passwordValidate) {
            userSignIn(data)
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
                    error={emailErr}
                    helperText={emailHelper}
                />
                <TextField
                    type="password"
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    size='small'
                    onChange={passwordMethod}
                    error={passwordErr}
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