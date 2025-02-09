import React, { useState, useEffect } from "react";
import './App.css';
import HeaderMain from './components/header/Header';
import MarketInformation from './components/market-schedule/MarketSchedule';
import BotsMatrixTrading from './components/bots/BotsMatrixTrading';
import TimeRange from './components/time-range/TimeRange';
import FooterMain from './components/footer/Footer';

function App() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const savedBot = localStorage.getItem("activeBot");
    const savedTime = localStorage.getItem("activeTime");
    const savedSource = localStorage.getItem("source");
    const savedTimeLineCostData = localStorage.getItem("timeLineCostData");

    const [activeTime, setActiveTime] = useState(savedTime ? Number(savedTime) : 1);
    const [activeBot, setActiveBot] = useState(savedBot ? Number(savedBot) : 0);
    const [source, setSource] = useState(savedSource || "bots");
    const [timeLineCostData, setTimeLineCostData] = useState(savedTimeLineCostData ? JSON.parse(savedTimeLineCostData) : []);

    const timeLineCost = [
        { index: 1, timeCost: [107, 227, 218, 342, 97, 68, 429, 274, 117, 393] },
        { index: 2, timeCost: [266, 400, 453, 154, 56, 221, 306, 174, 97, 74] },
        { index: 3, timeCost: [120, 182, 367, 261, 87, 418, 358, 107, 247, 86] },
        { index: 4, timeCost: [356, 368, 87, 237, 142, 352, 311, 419, 202, 77] },
    ];

    const timeLineCostBots = [
        { index: 1, timeCost: [266, 400, 453, 154, 56, 221, 306, 174, 97, 74] },
        { index: 2, timeCost: [107, 227, 218, 342, 97, 68, 429, 274, 117, 393] },
        { index: 3, timeCost: [356, 368, 87, 237, 142, 352, 311, 419, 202, 77] },
        { index: 4, timeCost: [120, 182, 367, 261, 87, 418, 358, 107, 247, 86] },
        { index: 5, timeCost: [10, 125, 35, 150, 55, 120, 500, 71, 51, 144] },
        { index: 6, timeCost: [78, 195, 222, 200, 100, 120, 545, 54, 63, 192] },
    ];

    useEffect(() => {
        fetch('/data/data.min.json')
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);

                if (!savedTimeLineCostData) {
                    setTimeLineCostData(timeLineCostBots[activeBot].timeCost);
                }
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        localStorage.setItem("activeBot", activeBot);
        localStorage.setItem("activeTime", activeTime);
        localStorage.setItem("source", source);
        localStorage.setItem("timeLineCostData", JSON.stringify(timeLineCostData));
    }, [activeBot, activeTime, source, timeLineCostData]);

    if (loading) return <div>Загрузка...</div>;
    if (error) return <div>Ошибка: {error}</div>;

    return (
        <div className="app">
            <HeaderMain />
            <MarketInformation 
                indexSwitch={activeTime} 
                data={data} 
                activeBot={activeBot} 
                timeLineCostData={timeLineCostData} 
                timeLineCost={timeLineCost} 
                source={source} 
            />
            <BotsMatrixTrading 
                data={data} 
                activeTime={activeTime} 
                setActiveBot={setActiveBot} 
                setTimeLineCostData={setTimeLineCostData} 
                setSource={setSource} 
            />
            <TimeRange 
                activeTime={activeTime} 
                setActiveTime={(time) => {
                    setActiveTime(time);
                    setTimeLineCostData(timeLineCost[time - 1]?.timeCost || []);
                    setSource("timeRange");
                }} 
            />
            <FooterMain />
        </div>
    );
}

export default App;
