import './download.css';
import illustration3 from '../../assets/images/illustration3.png';
import { OutlineButton } from '../../components';

const Download = () => {
    return (
        <section className='download-section'>
          <div className='download-section--description'>
          <div className="header">
                <h3>Download our mobile apps</h3>
                <p>Our dedicated patient engagement app and 
                web portal allow you to access information instantaneously (no tedeous form, long calls, 
                or administrative hassle) and securely</p>
            </div>
            <OutlineButton title="Download" />
          </div>
          <img src={illustration3} alt="illustration3"/>
        </section>
    )
}

export default Download;