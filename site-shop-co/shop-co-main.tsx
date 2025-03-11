import Header from './components/header/header';
import MainSite from './components/main/main-site';
import BrendsBlock from './components/partners/brends-block';
import NewArrivals from './components/new-arrivals/new-arrivals';

import './shop-co-main.css';
// import './media-query-css/laptop-max-1024.css';
// import './media-query-css/laptop-max-1440.css';
// import './media-query-css/mobile.css';


const MainShopCoContainer = () => {
    return (
        <div className="main-container__site-shop-co">

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
                href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Teachers:ital,wght@0,400..800;1,400..800&display=swap"
                rel="stylesheet"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Fredericka+the+Great&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Teachers:ital,wght@0,400..800;1,400..800&display=swap"
                rel="stylesheet" />


            <Header />
            <MainSite />
            <BrendsBlock />
            <NewArrivals />

        </div>
    );
};

export default MainShopCoContainer;