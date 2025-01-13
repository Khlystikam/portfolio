import React, { useState } from "react";
import './cars.css';

interface CarsCardData {
    id: string;
    nameCar: string;
    categoryCar: string;
    imgCar: string;
    spesification: {
        gasIcon?: string;
        gasValue?: string;
        carIcon?: string;
        carValue?: string;
        profileUserIcon?: string;
        profileUserValue?: string;
    }[];
    price: string;
}


interface CarsCardProps {
    data: CarsCardData[];
}

const CarsCard: React.FC<CarsCardProps> = ({ data }) => {
    const [visibleCount, setVisibleCount] = useState(8);

    const showMore = () => {
        setVisibleCount((prevCount) => prevCount + 4);
    };

    return (
        <div className="cars-box">
            {data.slice(0, visibleCount).map((item) => (
                <div key={item.id} className="car-card">
                    <div className="car-name-category">
                        <p className="name-car">{item.nameCar}</p>
                        <p className="category-car">{item.categoryCar}</p>
                    </div>        
                    <div className="img-cars-box">
                    <img src={item.imgCar} alt={item.nameCar} className="img-car" />
                    </div>

                    <div className="spesification">
                    {item.spesification.map((spec, index) => (
                        <div key={index} className="icon-text">
                        <img
                            src={spec.gasIcon || spec.carIcon || spec.profileUserIcon}
                            alt=""
                            className="icon"
                        />
                        <p className="name-icon">
                            {spec.gasValue || spec.carValue || spec.profileUserValue}
                        </p>
                    </div>
                    ))}
                </div>

                <div className="price-button-rent">
                    <div className="price-box">
                    <p className="price">{item.price}</p>
                    <p className="text-time">day</p>
                    </div>
                    <button className="button-rent">Rent Now</button>
                </div>
            </div>
            ))}
            {visibleCount < data.length && (
                <div className="show-more-car">
                    <button className='show-more-car-button' onClick={showMore}>
                        Show more car
                    </button>
                </div>
            )}
        </div>
    );
};

export default CarsCard;