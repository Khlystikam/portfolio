import React, { useState } from "react";
import "./Footer.css";

const FooterMain = () => {
    const [activeBot, setActiveBot] = useState(1);
    const [notification, setNotification] = useState(3);
    const [notificationStyle, setNotificationStyle] = useState("notification-none");

    const footerMenu = [
        { 
            index: 1, 
            name: "Dashboard", 
            activeImg: "/assets/img/footer/dashboard-active.webp",
            inactiveImg: "/assets/img/footer/dashboard-no-active.webp"
        },
        { 
            index: 2, 
            name: "Megabot", 
            activeImg: "/assets/img/footer/megabot-active.webp",
            inactiveImg: "/assets/img/footer/megabot-no-active.webp"
        },
        { 
            index: 3, 
            name: "Bot market", 
            activeImg: "/assets/img/footer/bot-market-active.webp",
            inactiveImg: "/assets/img/footer/bot-market-no-active.webp"
        },
        { 
            index: 4, 
            name: "Coin prices", 
            activeImg: "/assets/img/footer/coin-prices-active.webp",
            inactiveImg: "/assets/img/footer/coin-prices-no-active.webp"
        },
        { 
            index: 5, 
            name: "Profile", 
            activeImg: "/assets/img/footer/profile-active.webp",
            inactiveImg: "/assets/img/footer/profile-no-active.webp"
        },
    ];

    setTimeout(() => {
        setNotificationStyle("notification");
    }, 3000);

    return (
        <footer className="footer">
            {footerMenu.map((item) => (
                <button 
                    key={item.index} 
                    className="footer-menu" 
                    onClick={() => setActiveBot(item.index)}
                >
                    <div className="footer-box-img">
                        <img
                            src={activeBot === item.index ? item.activeImg : item.inactiveImg} 
                            alt={item.name}
                            className="footer-item-img"
                        />
                        {item.index === 5 && notification > 0 && (
                            <div className={ notificationStyle }>
                                <p>{ notification }</p>
                            </div>
                        )}
                    </div>
                    <p className={`footer-item-name ${activeBot === item.index ? "active" : ""}`}>
                        {item.name}
                    </p>
                </button>
            ))}
        </footer>
    );
};

export default FooterMain;
