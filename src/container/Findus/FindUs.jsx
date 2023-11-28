import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding'>
      <div className="app__wrapper-info">
        <SubHeading title="Contact" />
        <h1 className="headtext__cormorant" style={{marginBottom:"3rem"}}>Find Us</h1>
        <div className="app__wrapper-content">
          <p className="p__opensans">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
          <p className="p__cormorant" style={{color:"#dcca87", margin:"2rem 0 "}}>Opening Hours</p>
          <p className="p__opensans" style={{marginBottom:"1rem"}}>Mon - Fri: 10:00 am - 02:00 am</p>
          <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
        </div>
        <button type="button" style={{marginTop:"2rem"}} className='custom__button'>Visit Us</button>
      </div>
      <div className="app__wrapper-img">
        <img src={images.findus} alt="findus image" />
      </div>
  </div>
);

export default FindUs;
