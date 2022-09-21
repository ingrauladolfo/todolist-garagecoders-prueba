import { Alert } from 'bootstrap'
import React from 'react'
import { useState } from 'react'
import Login from '../Login/index'
import '../../../assets/css/Login.css'

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [flag, setFlag] = useState(false)
    const [login, setLogin] = useState(true)
    const handleSubmit = (e) => {
        e.preventDefault()
        {
            !name || !email || !password || !phone
                ? setFlag(true)
                : (setFlag(false),
                    localStorage.setItem('email', JSON.stringify(email)),
                    localStorage.setItem('password', JSON.stringify(password)),
                    console.log('Saved in local storage'),
                    setLogin(login))
            window.location.reload()
        }
    }
    const handleClick = (e) => {
        e.preventDefault()
        setLogin(!login)
    }
    return (
        <>
            {login ? (
                <form className="row g-3" onSubmit={handleSubmit}>
                    <h1 className="text-center">Register</h1>
                    <div className="form-grup">
                        <label>Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your name"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-grup">
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="demo@email.com"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-grup">
                        <label> Password</label>
                        <input
                            type="password"
                            className="form-control"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="form-grup">
                        <label>Phone number</label>
                        <input
                            type="tel"
                            className="form-control"
                            placeholder="1234"
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg btn-block">
                        Save
                    </button>
                    <p onClick={handleClick} className="forgot-password text-right">
                        Already registered?{' '}
                        <button onClick={handleClick} className="btn btn-primary btn-block">
                            Sign In
                        </button>
                    </p>
                    {flag && (
                        <Alert color="primary" variant="danger">
                            Please fill each field
                        </Alert>
                    )}
                </form>
            ) : (
                <Login />
            )}
        </>
    )
}

export default Register
