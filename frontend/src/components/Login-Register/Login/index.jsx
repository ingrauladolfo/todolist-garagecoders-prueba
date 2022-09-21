import { Alert } from 'bootstrap'
import React from 'react'
import { useState } from 'react'
import '../../../assets/css/Login.css'
import Home from '../../Home'
import Register from '../Register/index'

const Login = () => {
    const [emaillog, setEmaillog] = useState(' ')
    const [passwordlog, setPasswordlog] = useState(' ')

    const [flag, setFlag] = useState(false)

    const [home, setHome] = useState(true)
    const [login, setLogin] = useState(true)

    const handleLogin = (e) => {
        e.preventDefault()
        let pass = localStorage.getItem('password').replace(/"/g, '')
        let mail = localStorage.getItem('email').replace(/"/g, '')

        if (!emaillog || !passwordlog) {
            setFlag(true)
            console.log('EMPTY')
        } else if (passwordlog !== pass || emaillog !== mail) {
            setFlag(true)
        } else {
            setHome(!home)
            setFlag(false)
        }
    }
    const handleClick = (e) => {
        e.preventDefault()
        setLogin(!login)
    }

    return (
        <>
            {home ? (
                login ? (
                    <form className="row g-3" onSubmit={handleLogin}>
                        <h1 className="text-center">Login</h1>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter email"
                                onChange={(event) => setEmaillog(event.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter password"
                                onChange={(event) => setPasswordlog(event.target.value)}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary btn-lg btn-block">
                            Login
                        </button>
                        <p className="forgot-password text-right">
                            You don't have an account, please{' '}
                            <button
                                onClick={handleClick}
                                className="btn btn-primary btn-block"
                            >
                                signup
                            </button>
                        </p>

                        {flag && (
                            <Alert color="primary" variant="warning">
                                Fill correct Info else keep trying.
                            </Alert>
                        )}
                    </form>
                ) : (
                    <Register />
                )
            ) : (
                    <Home />
            )}
        </>
    )
}

export default Login
