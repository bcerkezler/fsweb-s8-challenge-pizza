import { Link } from "react-router-dom";
import "../styles/home.css";
import logo from '../assets/images/iteration-1-images/logo.svg'


function Hero() {
    return (
        <section className="hero">
            <img className="hero-logo" src={logo} alt="Teknolojik Yemekler"/>
            <h1 className="hero-title">
                KOD ACIKTIRIR, <br />
                PİZZA DOYURUR
            </h1>
            <Link to="/order" className="hero-button">
                ACIKTIM
            </Link>
        </section>
    );
}

export default Hero;