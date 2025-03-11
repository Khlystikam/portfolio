import ProfilNotification from '../components/IconMenuMobile';
import './header-main.css';


const HeaderMain = () => {
  return (
    <header className='nav-bar-top'>
        <a href='/my-projects/morent' className="logo-main">MORENT</a>
        <div className="search-main">
          <div className="magnifying-glass">
            <img src="/assets/dev-site/morent/icons/search-normal.png" className="magnifying-glass-img" alt="magnifying-glass" />
          </div>
          <input type="text" className="search-input" />
          <div className="settings-search">
            <img src="/assets/dev-site/morent/icons/filter.png" className="search-settings-img" alt="search-settings" />
          </div>
        </div>
        <ProfilNotification />
    </header>
  );
};

export default HeaderMain;