import React, { useState } from 'react';
import { Bot } from '../../AppBots';
import './BotsMatrixTrading.css';

interface BotsMatrixTradingProps {
    data: { 
        trading_capital: number; 
        balance: number; 
        on_hold: number; 
        bots: Bot[]; 
    };
    activeTime: number;
    setActiveBot: (index: number) => void;
    setTimeLineCostData: (data: number[]) => void;
    setSource: (source: string) => void;
}

const BotsMatrixTrading: React.FC<BotsMatrixTradingProps> = ({ data, activeTime, setActiveBot, setTimeLineCostData, setSource }) => {
    const [selectedBotIndex, setSelectedBotIndex] = useState(() => {
        const savedBotIndex = localStorage.getItem("activeBot");
        return savedBotIndex ? Number(savedBotIndex) : 0;
    });

    const botsTrading = [
        { id: 1, name: "attack", img: "/assets/img/bots-trading/attack-1.webp" },
        { id: 2, name: "place bot here", img: "/assets/img/bots-trading/place-bot-here.webp" },
        { id: 3, name: "balance", img: "/assets/img/bots-trading/balance.webp" },
        { id: 4, name: "defence", img: "/assets/img/bots-trading/defence.webp" },
        { id: 5, name: "megabot", img: "/assets/img/bots-trading/megabot.webp" },
        { id: 6, name: "attack", img: "/assets/img/bots-trading/attack-2.webp" },
    ];

    const timeRangeKeys = ["24h", "7d", "30d", "all_time"];
    const timeKey = timeRangeKeys[activeTime - 1] || "24h";

    const timeLineCostBots = [
        { index: 1, timeCost: [266, 400, 453, 154, 56, 221, 306, 174, 97, 74] },
        { index: 2, timeCost: [107, 227, 218, 342, 97, 68, 429, 274, 117, 393] },
        { index: 3, timeCost: [356, 368, 87, 237, 142, 352, 311, 419, 202, 77] },
        { index: 4, timeCost: [120, 182, 367, 261, 87, 418, 358, 107, 247, 86] },
        { index: 5, timeCost: [10, 125, 35, 150, 55, 120, 500, 71, 51, 144] },
        { index: 6, timeCost: [78, 195, 222, 200, 100, 120, 545, 54, 63, 192] },
    ];

    const handleBotClick = (index: number) => {
        if (index !== 1) {
            setSelectedBotIndex(index);
            setActiveBot(index);

            if (typeof setTimeLineCostData === "function") {
                setTimeLineCostData(timeLineCostBots[index].timeCost);
            } else {
                console.error("setTimeLineCostData is not a function");
            }

            setSource("bots");

            localStorage.setItem("activeBot", index.toString());
        }
    };

    return (
        <div className="bots-matrix-trading-container">
            <div className="lime-img-box">
                <img src="/assets/img/bots-trading/line.webp" alt="line" className="line-img" />
            </div>

            {data.bots.map((bot, index) => {
                const result = bot[timeKey] ?? 0;
                const resultNumber = typeof result === 'number' ? result : 0; // Преобразуем в число, если нужно

                return (
                    <button
                        key={index}
                        className={`bots-matrix-trading ${selectedBotIndex === index ? "active" : ""} ${index === 1 ? "bots-matrix-trading-name_no_active" : ""}`}
                        onClick={() => handleBotClick(index)}
                    >
                        <div className="bots-matrix-trading-img">
                            <img src={botsTrading[index].img} alt={botsTrading[index].name} />
                        </div>
                        <div className="bots-matrix-trading-name">
                            <p>
                                {botsTrading[index].name}
                            </p>
                        </div>
                        <div className={`${resultNumber > 0 ? "bots-matrix-trading-result-plus" : "bots-matrix-trading-result-minus"} ${index === 1 ? "bots-matrix-trading-result_no_active" : ""}`}>
                            {resultNumber}%
                        </div>
                    </button>
                );
            })}
        </div>
    );
};

export default BotsMatrixTrading;
