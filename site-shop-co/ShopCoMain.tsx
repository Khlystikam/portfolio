import Header from './components/pages/main/header/Header';
import MainSite from './components/pages/main/MainSite';
import BrendsBlock from './components/pages/main/partners/BrendsBlock';
import NewArrivals from './components/pages/main/new-arrivals/NewArrivals';
import TopSelling from './components/pages/main/top-selling/TopSelling';
import StyleDress from './components/pages/main/style-dress/StyleDress';
import CustomerReviews from './components/pages/main/customer-reviews/CustomerReviews';
import FormSubscribeBottom from './components/pages/main/form-subscribe-bottom/FormSubscribeBottom';

import './ShopCoMain.css';
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
            <TopSelling />
            <StyleDress />
            <CustomerReviews />
            <FormSubscribeBottom />

        </div>
    );
};

export default MainShopCoContainer;