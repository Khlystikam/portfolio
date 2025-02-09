import "./TimeRange.css";

const TimeRange = ({ activeTime, setActiveTime }) => {

    const timeRangeName = [
        { 
            index: 1,
            name: "24h",
        },
        { 
            index: 2,
            name: "7 days",
        },
        { 
            index: 3,
            name: "30 days",
        },
        { 
            index: 4,
            name: "All time",
        },
    ];

    return (
        <div className="time-range-container">
            <p className="time-range-text">
                Time Range:
            </p>
            <div className="time-range-button">
                {timeRangeName.map((item) => (
                    <button 
                        key={item.index} 
                        className= {`time-range-item ${activeTime === item.index ? "active" : ""}`}
                        onClick={() => setActiveTime(item.index)}
                    >
                        <p className="time-range-item-name">
                            {item.name}
                        </p>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default TimeRange;
