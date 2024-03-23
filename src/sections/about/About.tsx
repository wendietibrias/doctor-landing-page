import "./about.css";
import illustration2 from '../../assets/images/illustration2.png';
import { OutlineButton } from "../../components";

const About = () => {
    return (
        <section className="about-section">
           <img src={illustration2} alt="illustration 2"/>
           <div className="about-section--description">
          <div className="header">
                <h3>Leading healthcare providers</h3>
                <p>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
            </div> 
            <OutlineButton title="Learn more"/>
           </div>
        </section>
    )
}

export default About;