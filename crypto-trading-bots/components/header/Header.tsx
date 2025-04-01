import { useState } from "react";
import "./Header.css";

const HeaderMain = () => {
    const [burgerImgIcon] = useState("/assets/img/burger-menu/burger-menu-close.webp");
    const [navBurger] = useState("nav-menu");
    const [headerContainer] = useState("");
    const [menuList] = useState("menu-list-close");
    const [nameMenu] = useState("name-menu-open");
    const [refreshPage] = useState("refresh-page-open");
    

    const toggleMenu = [ //Список меню
        {nameMenu: "Dashboard", linkMenu: "/"},
        {nameMenu: "Buy Crypto", linkMenu: "/"},
        {nameMenu: "Trade", linkMenu: "/"},
        {nameMenu: "NFT", linkMenu: "/"},
        {nameMenu: "Deposit", linkMenu: "/"},
    ]

    return (
        <header className="header-main__target-bots">
            <div className={`header-container ${headerContainer}`}>
                <div className="burger-menu-contener">
                    <button className="burger-menu">
                        <img src={burgerImgIcon} className="burger-icon" alt="burger-icon" />
                    </button>
                </div>

                <div className={nameMenu}>
                    <h1 className="name-menu-text">Dashboard</h1>
                </div>

                <div className={refreshPage}>
                    <button className="refresh-page-btn" onClick={() => window.location.reload()}>
                        <img src="/assets/img/burger-menu/refresh-menu.webp" className="refresh-page-icon" alt="refresh-page-icon" />
                    </button>
                </div>
            </div>

            <nav className={ navBurger }>
                <ul className={menuList}>
                    {toggleMenu.map((item, index) => (
                        <li className="menu-list-item" key={index}>
                            <a href={item.linkMenu}>{item.nameMenu}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default HeaderMain;
