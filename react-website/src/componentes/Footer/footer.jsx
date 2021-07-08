import React from 'react'
import {Button} from '../Button/button';
import {Link} from 'react-router-dom';
import './footer.css';

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Ingresa a nuestro Boletin informativo para que recibas las mejores ofertas de vacaciones
                </p>
                <p className="footer-subscription-text">
                    Puedes abandonar la membresia cuando desees
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Email" className="footer-input" />
                        <Button buttonStyle="btn--outline">Suscribirse</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Acerca de nosotrs</h2>
                        <Link to="/signUp">Como funciona</Link>
                        <Link to="/">Testimonios</Link>
                        <Link to="/">Trayectoria</Link>
                        <Link to="/">Inversionistas</Link>
                        <Link to="/">Terminos de servicio</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link className="social-logo">
                            TRVL <i className="fab fa-typo3"/>
                        </Link>
                    </div>
                    <small className="website-rights">TRVL &copy; 2021</small>
                    <div className="social-icons">
                        <Link className="social-icon-link facebook" to="/" target="_blank" aria-label="Facebook">
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link className="social-icon-link instagram" to="/" target="_blank" aria-label="Instagram">
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link className="social-icon-link youtube" to="/" target="_blank" aria-label="YouTube">
                            <i className="fab fa-youtube"></i>
                        </Link>
                        <Link className="social-icon-link twitter" to="/" target="_blank" aria-label="Twitter">
                            <i className="fab fa-twitter"></i>
                        </Link>
                    </div>
                </div>

            </section>
            
        </div>
    )
}

export default Footer;
