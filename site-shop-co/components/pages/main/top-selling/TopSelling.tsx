import React from 'react';
import { useState } from "react";
import StarRating from '../../../functions/star-rating/StarRating';
import './TopSelling.css';

const TopSelling: React.FC = () => {
    const [visibleCount, setVisibleCount] = useState(4);

    const handleShowMore = () => {
        setVisibleCount((prev) => prev + 4);
    };

    interface topSellingItems {
        name: string;
        pathImg: string;
        stars: number;
        price: number;
        sale: number;
    }

    const topsellingItems:topSellingItems[] = [
        {name:"T-SHIRT WITH TAPE DETAILS", pathImg:"/assets/dev-site/shop-co/top-selling/001.png", stars: 5, price: 120, sale: 20},
        {name:"SKINNY FIT JEANS", pathImg:"/assets/dev-site/shop-co/top-selling/002.png", stars: 5, price: 260, sale: 0},
        {name:"CHECKERED SHIRT", pathImg:"/assets/dev-site/shop-co/top-selling/003.png", stars: 3, price: 180, sale: 0},
        {name:"SLEEVE STRIPED T-SHIRT", pathImg:"/assets/dev-site/shop-co/top-selling/004.png", stars:4, price: 160, sale: 0},
        {name:"T-SHIRT WITH TAPE DETAILS", pathImg:"/assets/dev-site/shop-co/top-selling/001.png", stars: 4, price: 120, sale: 35},
        {name:"SKINNY FIT JEANS", pathImg:"/assets/dev-site/shop-co/top-selling/002.png", stars: 5, price: 260, sale: 0},
        {name:"CHECKERED SHIRT", pathImg:"/assets/dev-site/shop-co/top-selling/003.png", stars: 3, price: 180, sale: 0},
        {name:"SLEEVE STRIPED T-SHIRT", pathImg:"/assets/dev-site/shop-co/top-selling/004.png", stars:4, price: 160, sale: 0},
        {name:"T-SHIRT WITH TAPE DETAILS", pathImg:"/assets/dev-site/shop-co/top-selling/001.png", stars: 2, price: 120, sale: 15},
        {name:"SKINNY FIT JEANS", pathImg:"/assets/dev-site/shop-co/top-selling/002.png", stars: 5, price: 260, sale: 0},
        {name:"CHECKERED SHIRT", pathImg:"/assets/dev-site/shop-co/top-selling/003.png", stars: 3, price: 180, sale: 0},
        {name:"SLEEVE STRIPED T-SHIRT", pathImg:"/assets/dev-site/shop-co/top-selling/004.png", stars:4, price: 160, sale: 0},
    ];

    return (
        <div className="top-selling__container">
            <h2 className="top-selling--h2">top selling</h2>
            <div className="top-selling__items-container">
                {topsellingItems.slice(0, visibleCount).map((item, index) => (
                    <a href="/my-projects/site-shop-co" className="top-selling__item" key={ index }>
                        <div className="top-selling__item_img-box">
                            <img
                                src={item.pathImg}
                                alt={item.name}
                            />
                        </div>
                        <div className="top-selling__item_text-box">
                            <div className="top-selling__items_name">
                                <p>{ item.name }</p>
                            </div>
                            <div className="top-selling__items_stars">
                                <StarRating rating={ item.stars } fontSaze='25px' />
                                <p>{ item.stars }/5</p>
                            </div>
                            <div className="top-selling__items_price">
                                {item.sale > 0 ? (
                                    <div className="items_price-sale">
                                        <p className="top-selling__items_price--sale">${item.price}</p>
                                        <p>
                                            ${item.price * (1 - item.sale / 100)}
                                        </p>
                                        <p className="items_price-sale--sale">-${item.sale}%</p>
                                    </div>
                                ) : (
                                    <p>${item.price}</p>
                                )}
                            </div>
                        </div>
                    </a>
                ))}
            </div>
            <div className="next-view__button">
                {visibleCount < topsellingItems.length && (
                    <button className="next-view__button--button" onClick={handleShowMore} type='button'>View next</button>
                )}
            </div>
        </div>
    );
};

export default TopSelling;