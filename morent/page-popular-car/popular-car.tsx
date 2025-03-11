import React from 'react';
import CarsCard from '../components/cars';
import './popular-car.css';

const PopularCar: React.FC = () => {

    const popularCarsData = [
        {
            id: "1",
            nameCar: "Koenigsegg",
            categoryCar: "Sport",
            imgCar: "/assets/dev-site/morent/cars-card/cars/car-1.png",
            spesification: [
                {gasIcon: "/assets/dev-site/morent/cars-card/icons-card/gas.png", gasValue:"90L"},
                {carIcon: "/assets/dev-site/morent/cars-card/icons-card/car-icon.png", carValue:"Manual"},
                {profileUserIcon: "/assets/dev-site/morent/cars-card/icons-card/profile-user.png", profileUserValue:"2 People"},                
                ],
            price: "$99.00/",
        },
        {
            id: "2",
            nameCar: "Nissan GT - R",
            categoryCar: "Sport",
            imgCar: "/assets/dev-site/morent/cars-card/cars/car-2.png",
            spesification: [
                {gasIcon: "/assets/dev-site/morent/cars-card/icons-card/gas.png", gasValue:"80L"},
                {carIcon: "/assets/dev-site/morent/cars-card/icons-card/car-icon.png", carValue:"Manual"},
                {profileUserIcon: "/assets/dev-site/morent/cars-card/icons-card/profile-user.png", profileUserValue:"2 People"},                
                ],
            price: "$88.00/",
        },
        {
            id: "3",
            nameCar: "Rolls - Royce",
            categoryCar: "Sedan",
            imgCar: "/assets/dev-site/morent/cars-card/cars/car-3.png",
            spesification: [
                {gasIcon: "/assets/dev-site/morent/cars-card/icons-card/gas.png", gasValue:"70L"},
                {carIcon: "/assets/dev-site/morent/cars-card/icons-card/car-icon.png", carValue:"Manual"},
                {profileUserIcon: "/assets/dev-site/morent/cars-card/icons-card/profile-user.png", profileUserValue:"2 People"},                
                ],
            price: "$96.00/",
        },
        {
            id: "4",
            nameCar: "Nissan GT - R",
            categoryCar: "Sport",
            imgCar: "/assets/dev-site/morent/cars-card/cars/car-4.png",
            spesification: [
                {gasIcon: "/assets/dev-site/morent/cars-card/icons-card/gas.png", gasValue:"80L"},
                {carIcon: "/assets/dev-site/morent/cars-card/icons-card/car-icon.png", carValue:"Manual"},
                {profileUserIcon: "/assets/dev-site/morent/cars-card/icons-card/profile-user.png", profileUserValue:"2 People"},                
                ],
            price: "$80.00/",
        },
    ];

    return (
        <div className='popular-container-cars'>
            <div className='popular-cars-box'>
                <div className="popular-cars">
                    <h2>Popular Cars</h2>
                    <button>View All</button>
                </div>
                <div className="item-cars">
                    <CarsCard data={popularCarsData} />
                </div>
            </div>
        </div>
    );
};

export default PopularCar;