import React from 'react'
import './style/Footer.css'


const Footer = () => {
    return (
        <footer>

            <div className="footer-content">
                <div className="footer-left">
                    <img src="/assets/lucas.jpg" alt="Lucas" />
                    <div className="dev-description">
                        <h3>Lucas Gois</h3>
                        <h3>Desenvolvedor Full Stack</h3>
                        <h3>ReactJS - NodeJS</h3>
                    </div>
                </div>
                <div className="footer-right">
                    <h4>
                        Dados de <a href="https://hgbrasil.com/status/weather">HG Brasil</a> API
                    </h4>
                    <h4>
                        Visite meu perfil no <a href="https://github.com/LucasGois1">GitHub</a>
                    </h4>
                </div>
            </div>
        </footer>
    )
}
export default Footer