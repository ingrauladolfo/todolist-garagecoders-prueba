import React from 'react'
import '../../assets/css/Header.css'
const Header = () => {
    const handleClick = () => {
        localStorage.clear()
        window.location.reload()
    }
    return (
        <div className="flex shopping-card">
            <div className="brand-name">
                Todo List GarageCoders
                
            </div>
            <div className="brand-name">
                <p>
                    Logged as {localStorage.getItem('email').replace(/"/g, '')}{' '}
                    
                </p>
                
            </div>
            <div className="brand-name">
                <a type="button" onClick={handleClick}>
                    Logout
                </a>
                
            </div>
            
        </div>
    )
}

export default Header
