import "./service.css";
import { services } from "../../constants/services";
import { OutlineButton } from "../../components";
import pattern from '../../assets/images/pattern.png';
import back from '../../assets/images/back.png';

const Service = () => {
    return (
        <section className="service-section">
            <div className="service-section--header">
                <h3>Our Services</h3>
                <p>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
            </div>
            <div className="service-section--items">
                {services.map((item:any,idx:number)=>(
                    <div key={idx} className="item">
                        <img src={item.icon} alt={item.title}/>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
            <img src={back} alt="back background" id="back-image"/>
            <img src={pattern} alt="pattern" id="pattern-image"/>
            <div className="more-button">
                <OutlineButton title="Learn more" />
            </div>
        </section>
    )
}

export default Service;