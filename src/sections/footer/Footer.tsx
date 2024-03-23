import "./footer.css";
import back from "../../assets/images/pattern.png";
import logo2 from "../../assets/images/logo2.png";

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="footer-section--container">
                <div className="container-1">
                    <img src={logo2} alt="logo2"/>
                    <p>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
                    <h5>©Trafalgar PTY LTD 2020. All rights reserved</h5>
                </div>
                <div className="container-2">
                    <h5>Company</h5>
                    <ul>
                        <li>About</li>
                        <li>Testimonials</li>
                        <li>Find a doctor</li>
                        <li>Apps</li>
                    </ul>
                </div>
                <div className="container-3">
                    <h5>Regions</h5>
                    <ul>
                        <li>Indonesia</li>
                        <li>Singapore</li>
                        <li>Fillipina</li>
                        <li>United States</li>
                    </ul>
                </div>
                <div className="container-4">
                    <h5>Help</h5>
                    <ul>
                        <li>Indonesia</li>
                        <li>Singapore</li>
                        <li>Fillipina</li>
                        <li>United States</li>
                    </ul>
                </div>
            </div>
            <img src={back} alt="pattern-image" id="pattern-image-footer-1"/>
        </footer>
    )
}

export default Footer;