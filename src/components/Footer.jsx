import React from 'react'
import './Footer.css'


const Footer = () => {
    return (
        <footer>
            <img src="/assets/lucas.jpg" alt="Lucas" />
            <h3>Lucas Gois.</h3>
            <div className="footer-content">
                <h4>
                    Dados de <a href="https://hgbrasil.com/status/weather">HG Brasil</a> API
                    </h4>
                <h4>
                    Visite meu perfil no <a href="https://github.com/LucasGois1">GitHub</a>
                </h4>
            </div>
        </footer>
    )
}
export default Footer