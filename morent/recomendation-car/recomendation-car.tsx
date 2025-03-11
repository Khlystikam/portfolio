import React from 'react';
import CarsCard from '../components/cars';
import './recomendation-car.css';

const RecomendationCar: React.FC = () => {

    const RecomendationCarData = [
        {
            id: "1",
            nameCar: "All New Rush",
            categoryCar: "SUV",
            imgCar: "/assets/dev-site/morent/cars-card/cars/car-r.1.png",
            spesification: [
                {gasIcon: "/assets/dev-site/morent/cars-card/icons-card/gas.png", gasValue:"70L"},
                {carIcon: "/assets/dev-site/morent/cars-card/icons-card/car-icon.png", carValue:"Manual"},
                {profileUserIcon: "/assets/dev-site/morent/cars-card/icons-card/profile-user.png", profileUserValue:"6 People"},                
                ],
            price: "$72.00/",
        },
        {
            id: "2",
            nameCar: "CR  - V",
            categoryCar: "SUV",
            imgCar: "/assets/dev-site/morent/cars-card/cars/car-r.2.png",
            spesification: [
                {gasIcon: "/assets/dev-site/morent/cars-card/icons-card/gas.png", gasValue:"80L"},
                {carIcon: "/assets/dev-site/morent/cars-card/icons-card/car-icon.png", carValue:"Manual"},
                {profileUserIcon: "/assets/dev-site/morent/cars-card/icons-card/profile-user.png", profileUserValue:"6 People"},                
                ],
            price: "$80.00/",
        },
        {
            id: "3",
            nameCar: "All New Terios",
            categoryCar: "Sedan",
            imgCar: "/assets/dev-site/morent/cars-card/cars/car-r.3.png",
            spesification: [
                {gasIcon: "/assets/dev-site/morent/cars-card/icons-card/gas.png", gasValue:"90L"},
                {carIcon: "/assets/dev-site/morent/cars-card/icons-card/car-icon.png", carValue:"Manual"},
                {profileUserIcon: "/assets/dev-site/morent/cars-card/icons-card/profile-user.png", profileUserValue:"6 People"},                
                ],
            price: "$74.00/",
        },
        {
            id: "4",
            nameCar: "CR  - V",
            categoryCar: "SUV",
            imgCar: "/assets/dev-site/morent/cars-card/cars/car-r.4.png",
            spesification: [
                {gasIcon: "/assets/dev-site/morent/cars-card/icons-card/gas.png", gasValue:"80L"},
                {carIcon: "/assets/dev-site/morent/cars-card/icons-card/car-icon.png", carValue:"Manual"},
                {profileUserIcon: "/assets/dev-site/morent/cars-card/icons-card/profile-user.png", profileUserValue:"6 People"},                
                ],
            price: "$80.00/",
        },
        {
            id: "5",
            nameCar: "MG ZX Exclusice",
            categoryCar: "Hatchback",
            imgCar: "/assets/dev-site/morent/cars-card/cars/car-r.5.png",
            spesification: [
                {gasIcon: "/assets/dev-site/morent/cars-card/icons-card/gas.png", gasValue:"70L"},
                {carIcon: "/assets/dev-site/morent/cars-card/icons-card/car-icon.png", carValue:"Manual"},
                {profileUserIcon: "/assets/dev-site/morent/cars-card/icons-card/profile-user.png", profileUserValue:"4 People"},                
                ],
            price: "$76.00/",
        },
        {
            id: "6",
            nameCar: "New MG ZS",
            categoryCar: "SUV",
            imgCar: "/assets/dev-site/morent/cars-card/cars/car-r.6.png",
            spesification: [
                {gasIcon: "/assets/dev-site/morent/cars-card/icons-card/gas.png", gasValue:"80L"},
                {carIcon: "/assets/dev-site/morent/cars-card/icons-card/car-icon.png", carValue:"Manual"},
                {profileUserIcon: "/assets/dev-site/morent/cars-card/icons-card/profile-user.png", profileUserValue:"6 People"},                
                ],
            price: "$80.00/",
        },
        {
            id: "7",
            nameCar: "MG ZX Excite",
            categoryCar: "Hatchback",
            imgCar: "/assets/dev-site/morent/cars-card/cars/car-r.7.png",
            spesification: [
                {gasIcon: "/assets/dev-site/morent/cars-card/icons-card/gas.png", gasValue:"90L"},
                {carIcon: "/assets/dev-site/morent/cars-card/icons-card/car-icon.png", carValue:"Manual"},
                {profileUserIcon: "/assets/dev-site/morent/cars-card/icons-card/profile-user.png", profileUserValue:"4 People"},                
                ],
            price: "$74.00/",
        },
        {
            id: "8",
            nameCar: "New MG ZS",
            categoryCar: "SUV",
            imgCar: "/assets/dev-site/morent/cars-card/cars/car-r.8.png",
            spesification: [
                {gasIcon: "/assets/dev-site/morent/cars-card/icons-card/gas.png", gasValue:"80L"},
                {carIcon: "/assets/dev-site/morent/cars-card/icons-card/car-icon.png", carValue:"Manual"},
                {profileUserIcon: "/assets/dev-site/morent/cars-card/icons-card/profile-user.png", profileUserValue:"6 People"},                
                ],
            price: "$80.00/",
        },
        {
            id: "9",
            nameCar: "MG ZX Exclusice",
            categoryCar: "Hatchback",
            imgCar: "/assets/dev-site/morent/cars-card/cars/car-r.5.png",
            spesification: [
                {gasIcon: "/assets/dev-site/morent/cars-card/icons-card/gas.png", gasValue:"70L"},
                {carIcon: "/assets/dev-site/morent/cars-card/icons-card/car-icon.png", carValue:"Manual"},
                {profileUserIcon: "/assets/dev-site/morent/cars-card/icons-card/profile-user.png", profileUserValue:"4 People"},                
                ],
            price: "$76.00/",
        },
        {
            id: "10",
            nameCar: "New MG ZS",
            categoryCar: "SUV",
            imgCar: "/assets/dev-site/morent/cars-card/cars/car-r.6.png",
            spesification: [
                {gasIcon: "/assets/dev-site/morent/cars-card/icons-card/gas.png", gasValue:"80L"},
                {carIcon: "/assets/dev-site/morent/cars-card/icons-card/car-icon.png", carValue:"Manual"},
                {profileUserIcon: "/assets/dev-site/morent/cars-card/icons-card/profile-user.png", profileUserValue:"6 People"},                
                ],
            price: "$80.00/",
        },
        {
            id: "11",
            nameCar: "MG ZX Excite",
            categoryCar: "Hatchback",
            imgCar: "/assets/dev-site/morent/cars-card/cars/car-r.7.png",
            spesification: [
                {gasIcon: "/assets/dev-site/morent/cars-card/icons-card/gas.png", gasValue:"90L"},
                {carIcon: "/assets/dev-site/morent/cars-card/icons-card/car-icon.png", carValue:"Manual"},
                {profileUserIcon: "/assets/dev-site/morent/cars-card/icons-card/profile-user.png", profileUserValue:"4 People"},                
                ],
            price: "$74.00/",
        },
        {
            id: "12",
            nameCar: "New MG ZS",
            categoryCar: "SUV",
            imgCar: "/assets/dev-site/morent/cars-card/cars/car-r.8.png",
            spesification: [
                {gasIcon: "/assets/dev-site/morent/cars-card/icons-card/gas.png", gasValue:"80L"},
                {carIcon: "/assets/dev-site/morent/cars-card/icons-card/car-icon.png", carValue:"Manual"},
                {profileUserIcon: "/assets/dev-site/morent/cars-card/icons-card/profile-user.png", profileUserValue:"6 People"},                
                ],
            price: "$80.00/",
        },
        {
            id: "13",
            nameCar: "New MG ZS",
            categoryCar: "SUV",
            imgCar: "/assets/dev-site/morent/cars-card/cars/car-r.8.png",
            spesification: [
                {gasIcon: "/assets/dev-site/morent/cars-card/icons-card/gas.png", gasValue:"80L"},
                {carIcon: "/assets/dev-site/morent/cars-card/icons-card/car-icon.png", carValue:"Manual"},
                {profileUserIcon: "/assets/dev-site/morent/cars-card/icons-card/profile-user.png", profileUserValue:"6 People"},                
                ],
            price: "$80.00/",
        },
        {
            id: "14",
            nameCar: "MG ZX Exclusice",
            categoryCar: "Hatchback",
            imgCar: "/assets/dev-site/morent/cars-card/cars/car-r.5.png",
            spesification: [
                {gasIcon: "/assets/dev-site/morent/cars-card/icons-card/gas.png", gasValue:"70L"},
                {carIcon: "/assets/dev-site/morent/cars-card/icons-card/car-icon.png", carValue:"Manual"},
                {profileUserIcon: "/assets/dev-site/morent/cars-card/icons-card/profile-user.png", profileUserValue:"4 People"},                
                ],
            price: "$76.00/",
        },
        {
            id: "15",
            nameCar: "New MG ZS",
            categoryCar: "SUV",
            imgCar: "/assets/dev-site/morent/cars-card/cars/car-r.6.png",
            spesification: [
                {gasIcon: "/assets/dev-site/morent/cars-card/icons-card/gas.png", gasValue:"80L"},
                {carIcon: "/assets/dev-site/morent/cars-card/icons-card/car-icon.png", carValue:"Manual"},
                {profileUserIcon: "/assets/dev-site/morent/cars-card/icons-card/profile-user.png", profileUserValue:"6 People"},                
                ],
            price: "$80.00/",
        },
        {
            id: "16",
            nameCar: "MG ZX Excite",
            categoryCar: "Hatchback",
            imgCar: "/assets/dev-site/morent/cars-card/cars/car-r.7.png",
            spesification: [
                {gasIcon: "/assets/dev-site/morent/cars-card/icons-card/gas.png", gasValue:"90L"},
                {carIcon: "/assets/dev-site/morent/cars-card/icons-card/car-icon.png", carValue:"Manual"},
                {profileUserIcon: "/assets/dev-site/morent/cars-card/icons-card/profile-user.png", profileUserValue:"4 People"},                
                ],
            price: "$74.00/",
        },
        {
            id: "17",
            nameCar: "New MG ZS",
            categoryCar: "SUV",
            imgCar: "/assets/dev-site/morent/cars-card/cars/car-r.8.png",
            spesification: [
                {gasIcon: "/assets/dev-site/morent/cars-card/icons-card/gas.png", gasValue:"80L"},
                {carIcon: "/assets/dev-site/morent/cars-card/icons-card/car-icon.png", carValue:"Manual"},
                {profileUserIcon: "/assets/dev-site/morent/cars-card/icons-card/profile-user.png", profileUserValue:"6 People"},                
                ],
            price: "$80.00/",
        },
    ];

    return (
        <div className='recomendatio-container-cars'>
            <div className='recomendation-cars-box'>
                <div className="recomendation-cars">
                    <h2>Recomendation Cars</h2>
                    <button>View All</button>
                </div>
                <div className="item-cars">
                    <CarsCard data={RecomendationCarData} />
                </div>
            </div>
        </div>
    );
};

export default RecomendationCar;