import React, { useState } from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="header-logo"></div>
            <div className="header-title">
                <h1>Previsão do tempo</h1>
            </div>
        </div>
    )
}

export default Header