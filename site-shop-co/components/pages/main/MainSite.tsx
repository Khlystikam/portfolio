import React from 'react';
import './MainSite.css';

const MainSite: React.FC = () => {
    return (
        <div className='main-site'>
            <div className="main-container">
                <div className="main-first-block">
                    <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                    <p className="first-block-description">Browse through our diverse range of meticulously crafted garments, designed to bring out your    individuality and cater to your sense of style.</p>
                    <button className='btn-main-first-block'>
                        Shop Now
                    </button>
                    <div className="main-second-statistics">
                        <div className="statistics statistics-1">
                            <p className="statistics-number">200+</p>
                            <p className="statistics-name">International Brands</p>
                        </div>
                        <div className="statistics statistics-2">
                            <p className="statistics-number">2,000+</p>
                            <p className="statistics-name">High-Quality Products</p>
                        </div>
                        <div className="statistics statistics-3">
                            <p className="statistics-number">30,000+</p>
                            <p className="statistics-name">Happy Customers</p>
                        </div>
                    </div>
                </div>
                <div className="main-second-block">
                    <img className="main-second-block-img" src="/assets/dev-site/shop-co/bg_img_main.webp" alt="bg img main" />
                </div>
            </div>
        </div>
    );
};

export default MainSite;