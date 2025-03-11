import HeaderMain from './page-main/header-main';
import BannersMain from './page-main/banners-main';
import MainPickUp from './page-main/pick-up';
import PopularCar from './page-popular-car/popular-car';
import RecomendationCar from './recomendation-car/recomendation-car';
import Footer from './footer/footer-site';
// import { Helmet } from 'react-helmet';

import './morent-main.css';
import './media-query-css/laptop-max-1024.css';
import './media-query-css/laptop-max-1440.css';
import './media-query-css/mobile.css';


const MainMorentContainer = () => {
  return (
    <div className='main-container-site'>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Teachers:ital,wght@0,400..800;1,400..800&display=swap" 
          rel="stylesheet" 
        />


      <HeaderMain />
      <BannersMain />
      <MainPickUp />
      <PopularCar />
      <RecomendationCar />
      <Footer />

    </div>
  );
};

export default MainMorentContainer;