import React from 'react';
import {images} from '../../constants'
import './Header.css';
import { SubHeading } from '../../components';
const Header = () => (
  <div className='app__header app__wrapper section__padding'>
    <div className="app__wrapper-info">
      <SubHeading title="Chase the new flavour"/>
      <h1 className="app__header-h1">The Key to Fine Dining</h1>
      <p className="p__opensans" style={{margin:'2rem 0'}}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
      <button type='button' className='custom__button'>Eplore Menu</button>
    </div>
    <div className="app__wrapper-img">
        <img src={images.welcome} alt="header image" />
    </div>
  </div>
);

export default Header;
