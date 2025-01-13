import React from 'react';
import ProfilNotification from '../components/IconMenuMobile';
import './header-main.css';


const HeaderMain = () => {
  return (
    <header className='nav-bar-top'>
        <a href='/dev-sites/site-morent' className="logo-main">MORENT</a>
        <div className="search-main">
          <div className="magnifying-glass">
            <img src="../assets/dev-site/assets/search-normal.png" className="magnifying-glass-img" alt="magnifying-glass" />
          </div>
          <input type="text" className="search-input" />
          <div className="settings-search">
            <img src="../assets/dev-site/assets/filter.png" className="search-settings-img" alt="search-settings" />
          </div>
        </div>
        <ProfilNotification />
    </header>
  );
};

export default HeaderMain;