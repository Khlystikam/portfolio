import { Line } from 'react-chartjs-2';
import { Bot } from '../../AppBots';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    ScriptableContext
} from 'chart.js';

import './MarketSchedule.css';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

interface MarketInformationProps {
    indexSwitch: number;
    data: { 
        trading_capital: number;
        balance: number;
        on_hold: number;
        bots: Bot[];  // Добавьте свойство bots
    };
    activeBot: number;
    timeLineCostData: number[];
    timeLineCost: { index: number; timeCost: number[] }[];
    source: string;
}

const MarketInformation: React.FC<MarketInformationProps> = ({ 
    indexSwitch, 
    data, 
    activeBot, 
    timeLineCostData, 
    timeLineCost, 
    source 
}) => {
    const timeRangeKeys = ["24h", "7d", "30d", "all_time"];
    const timeKey = timeRangeKeys[indexSwitch - 1] || "24h";

    const selectedBot = data.bots[activeBot] || {};
    const botResult: number = typeof selectedBot[timeKey] === 'number' ? selectedBot[timeKey] : 0;

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

    const gradientFill = (context: ScriptableContext<'line'>) => {
        const chart = context.chart;
        const { ctx, chartArea } = chart;
        if (!chartArea) return null;

        const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
        gradient.addColorStop(0, 'rgba(34, 120, 212, 0)');
        gradient.addColorStop(1, 'rgb(44, 128, 218, 0.6)');
        return gradient;
    };

    const chartData = {
        labels: selectedTimeLine.timeSegment,
        datasets: [
            {
                label: 'Time Cost',
                data: timeCostArray,
                borderColor: '#2278d4',
                backgroundColor: gradientFill as unknown as (ctx: ScriptableContext<'line'>) => string | undefined,
                fill: true,
                tension: 0.5,
                pointBackgroundColor: timeCostArray.map((_, index) => 
                    index === activeBot ? '#9cc4ef' : 'transparent'
                ),
                pointBorderColor: timeCostArray.map((_, index) => 
                    index === activeBot ? '#fff' : 'transparent'
                ),
                pointRadius: timeCostArray.map((_, index) => 
                    index === activeBot ? 4 : 0
                ),
                pointBorderWidth: 0,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { display: false },
            tooltip: {
                enabled: true,
                backgroundColor: '#222',
                bodyColor: 'rgba(255, 255, 255, 0.0)',
                borderColor: 'rgba(255, 255, 255, 0.1)',
                borderWidth: 1,
                displayColors: false,
            },
        },
        scales: {
            x: {
                display: true,
                grid: {
                    display: true,
                    color: 'rgba(255, 255, 255, 0.05)',
                    borderDash: [5, 5],
                },
                ticks: { display: false },
            },
            y: {
                display: true,
                grid: {
                    display: true,
                    color: 'rgba(255, 255, 255, 0.05)',
                    borderDash: [5, 5],
                },
                ticks: { display: false },
            },
        },
    };

    const formatNumber = (num: number): string => {
        return num.toLocaleString('ru-RU');
    };

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
                    </div>
                    <div className="onhold-block">
                        <p className="trading-onhoLd-text">On HoLD:</p>
                        <p className="trading-onhoLd-result">{formatNumber(data.on_hold)}</p>
                    </div>
                </div>
            </div>
            <div className="chart-container">
                <Line data={chartData} options={options} />
                <p className={`chart-percentage ${botResult < 0 ? 'negative' : 'positive'}`}>
                    {botResult < 0 ? `- ${Math.abs(botResult)}%` : `+ ${botResult}%`}
                </p>
            </div>
        </div>
    );
};

export default MarketInformation;
