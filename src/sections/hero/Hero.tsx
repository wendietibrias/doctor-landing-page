import "./hero.css";
import logo from "../../assets/icons/logo.png";
import illustration1 from '../../assets/images/illustration.png';
import { useState } from "react";

const Hero = () => {
    const [isOpen,setIsOpen] = useState<boolean>(false);

    const navigationSidebar = () => {
        if(isOpen) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    }

    return (
        <section className="hero-section">
            <div className="hero-section--container">
              <nav className="hero-section--navbar">
                <img src={logo} alt="logo-doctor-app" className="logo-navbar"/>
                <div className="links-container">
                <ul className={`links ${isOpen && 'active'}`}>
                    <li className="link-item">
                        <a href="void:(0)">Home</a>
                    </li>
                    <li className="link-item">
                        <a href="void:(0)">Find a doctor</a>
                    </li>
                    <li className="link-item">
                        <a href="void:(0)">Apps</a>
                    </li>
                    <li className="link-item">
                        <a href="void:(0)">Testimonials</a>
                    </li>
                    <li className="link-item">
                        <a href="void:(0)">About us</a>
                    </li>
                </ul>
                <button onClick={navigationSidebar} id="hamburger-menu">
                <i className="ri-menu-line"></i>
                </button>
                </div>
              </nav>
              <div className="hero-section--section-content">
                 <div className="description-hero">
                    <h2>Virtual healthcare for you</h2>
                    <p>
                        Trafalgar provides progressive, and affordable 
                        healthcare, accessible on mobile and online 
                        for everyone
                    </p>
                    <button>Consult today</button>
                 </div>
                 <img src={illustration1} alt="illustration1" className="hero-illustration" />
              </div>
            </div>
        </section>
    )
}

export default Hero;