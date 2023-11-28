import React from 'react';
import { images, data } from '../../constants';
import './SpecialMenu.css';
import { MenuItem, SubHeading } from '../../components';

const SpecialMenu = () => (
  <div className='app__specialmenu section__padding flex__center' id='menu'>
    <div className="app__specialmenu-title">
      <SubHeading title='Menu that fits you palatte' />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>
    <div className="app__specialmenu-menu">
      <div className="app__specialmenu-menu_wine flex__center">
        <p className='app__specialmenu-menu_heading'>Wine & Beer</p>
        <div className="app__specialmenu-menu_items">
          {data.wines.map((wine, index) => (
              <MenuItem key={wine.title+index} title={wine.title} price={wine.price} tag={wine.tags} />
          ))}
        </div>
      </div>
      <div className="app__specialmenu-menu_img">
        <img src={images.menu} alt="menu" />
      </div>
      <div className="app__specialmenu-menu_cocktails flex__center">
        <p className='app__specialmenu-menu_heading'>Cocktails</p>
        <div className="app__specialmenu-menu_items">
          {data.cocktails.map((cocktails, index) => (
             <MenuItem key={cocktails.title+index} title={cocktails.title} price={cocktails.price} tag={cocktails.tags} />
          ))}
        </div>
      </div>
    </div>
    <div style={{ marginTop: "15px" }}>
      <button type='button' className='custom__button'>View More</button>
    </div>
  </div>
);

export default SpecialMenu;
