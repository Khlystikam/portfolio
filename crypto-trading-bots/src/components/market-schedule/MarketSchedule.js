import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area } from 'recharts';
import './MarketSchedule.css';

const MarketInformation = ({ indexSwitch, data, activeBot, timeLineCostData, timeLineCost, source }) => {
    const timeRangeKeys = ["24h", "7d", "30d", "all_time"];
    const timeKey = timeRangeKeys[indexSwitch - 1] || "24h";

    const selectedBot = data.bots[activeBot] || {};
    const botResult = selectedBot[timeKey] ?? 0;

    const timeLine = [
        { index: 1, timeSegment: ["5h", "10h", "15h", "20h", "24h"] },
        { index: 2, timeSegment: ["22.04", "23.04", "24.04", "25.04", "26.04"] },
        { index: 3, timeSegment: ["06.04", "12.04", "18.04", "24.04", "30.04"] },
        { index: 4, timeSegment: ["18d", "36d", "54d", "72d", "90d"] },
    ];

    const selectedTimeLine = timeLine.find(item => item.index === indexSwitch);

    const timeCostArray = source === "timeRange"
        ? timeLineCost?.[indexSwitch - 1]?.timeCost || []
        : timeLineCostData.length ? timeLineCostData : [];

    if (!selectedTimeLine || timeCostArray.length === 0) {
        return <div>Нет данных</div>;
    }

    const chartData = timeCostArray.map((value, i) => ({ timeCost: value, index: i }));

    const formatNumber = (number) => {
        return number.toLocaleString('ru-RU');
    };

    // Определение точки, соответствующей выбранному боту
    const botData = chartData[activeBot]; // Данные, соответствующие активному боту

    return (
        <div className="market-container">
            <div className="market-capital-info">
                <div className="trading-capital">
                    <p className="trading-capital-text">trading capital</p>
                    <p className="trading-capital-result">{data.trading_capital} BTC</p>
                </div>
                <div className="balance-capital-onhold">
                    <div className="balance-block">
                        <p className="trading-balance-text">balance:</p>
                        <p className="trading-balance-result">{formatNumber(data.balance)}</p>
                        <img src="/assets/img/burger-menu/icon-h.webp" alt="icon-h" />
                    </div>

                    <div className="onhold-block">
                        <p className="trading-onhoLd-text">On HoLD:</p>
                        <p className="trading-onhoLd-result">{formatNumber(data.on_hold)}</p>
                        <img src="/assets/img/burger-menu/icon-h.webp" alt="icon-h" />
                    </div>
                </div>
            </div>

            <div className="chart-container">
                <ResponsiveContainer width="100%" height={200}>
                    <LineChart data={chartData}>
                        <defs>
                            <linearGradient id="gradient-fill" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#007bff" stopOpacity={0.6} />
                                <stop offset="100%" stopColor="#32cd32" stopOpacity={0.1} />
                            </linearGradient>
                        </defs>

                        <Area 
                            type="monotone" 
                            dataKey="timeCost" 
                            stroke="#2278d4" 
                            strokeWidth={1} 
                            fill="rgba(34, 120, 212, 0.2)"  // Сделал цвет похожим на линию, но с прозрачностью
                            fillOpacity={0.5} 
                        />
                        
                        <CartesianGrid stroke="rgba(255, 255, 255, 0.03)" />
                        <XAxis hide />
                        <YAxis hide />
                        <Tooltip contentStyle={{ background: "#222", border: "none", color: "#fff", opacity: 0 }} cursor={{ stroke: "none" }} />

                        <Line
                            type="monotone"
                            dataKey="timeCost"
                            stroke="#2278d4"
                            strokeWidth={1}
                            dot={({ cx, cy, payload }) => {
                                if (payload.index === activeBot) {
                                    return <circle cx={cx} cy={cy} r={4 } fill="#9cc4ef" stroke="#fff" strokeWidth={0} />;
                                }
                                return null;
                            }}
                        />
                    </LineChart>
                </ResponsiveContainer>

                <p className={`chart-percentage ${botResult < 0 ? 'negative' : 'positive'}`}>
                    {botResult < 0 ? `- ${Math.abs(botResult)}%` : `+ ${botResult}%`}
                </p>
            </div>

            <div className="time-trading-container">
                <p className="time-trading-p">
                    {selectedTimeLine.timeSegment.map((time, index) => (
                        <span key={index} className="time-trading">{time}</span>
                    ))}
                </p>
            </div>
        </div>
    );
};

export default MarketInformation;
