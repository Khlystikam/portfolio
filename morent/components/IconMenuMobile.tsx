import React, { useState, useEffect } from 'react';

const ProfilNotification: React.FC = () => {

    const [state, setState] = React.useState("none");
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);


    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            setState(window.innerWidth < 768 ? "none" : "block");
        };

        window.addEventListener("resize", handleResize);


        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleClick = () => {
        if (window.innerWidth < 768) {
            if (state === "none") {
                setState("flex");
            } else {
                setState("none");
            }
        }
    };

    return (
        <div className="profil-notification">
            {isMobile ? (
                <>
                    <div className="favorites-cars profil-box-icons" style={{ display: state }}>
                        <img src="/assets/dev-site/morent/icons/favorites.png" alt="favorites" />
                    </div>
                    <div className="notifications profil-box-icons" style={{ display: state }}>
                        <img src="/assets/dev-site/morent/icons/notification.png" alt="notifications" />
                    </div>
                    <div className="profil-settings profil-box-icons" style={{ display: state }}>
                        <img src="/assets/dev-site/morent/icons/settings.png" alt="settings" />
                    </div>
                    <div className="profil-icon profil-box-icons" onClick={handleClick}>
                        <img src="/assets/dev-site/morent/icons/profil-icon.png" alt="profil-icon" />
                    </div>
                </>
            ) : (
                <>
                    <div className="favorites-cars profil-box-icons">
                        <img src="/assets/dev-site/morent/icons/favorites.png" alt="favorites" />
                    </div>
                    <div className="notifications profil-box-icons">
                        <img src="/assets/dev-site/morent/icons/notification.png" alt="notifications" />
                    </div>
                    <div className="profil-settings profil-box-icons">
                        <img src="/assets/dev-site/morent/icons/settings.png" alt="settings" />
                    </div>
                    <div className="profil-icon profil-box-icons">
                        <img src="/assets/dev-site/morent/icons/profil-icon.png" alt="profil-icon" />
                    </div>
                </>
            )}
        </div>
    );
    
};

export default ProfilNotification;