import "./Header.css";
import { useState } from "react";

const HeaderMain = () => {
    const [burgerImgIcon, setBurgerImgIcon] = useState("/assets/img/burger-menu/burger-menu-close.webp");
    const [navBurger, setNavBurger] = useState("nav-menu");
    const [headerContainer, setHeaderContainer] = useState("");
    const [menuList, setMenuList] = useState("menu-list-close");
    const [nameMenu, setNameMenu] = useState("name-menu-open");
    const [refreshPage, setRefreshPage] = useState("refresh-page-open");
    

    const toggleMenu = [ //Список меню
        {nameMenu: "Dashboard", linkMenu: "/"},
        {nameMenu: "Buy Crypto", linkMenu: "/"},
        {nameMenu: "Trade", linkMenu: "/"},
        {nameMenu: "NFT", linkMenu: "/"},
        {nameMenu: "Deposit", linkMenu: "/"},
    ]

    const switchBurgerIcon = () => {
        if (burgerImgIcon === "/assets/img/burger-menu/burger-menu-close.webp") {
            setBurgerImgIcon("/assets/img/burger-menu/burger-menu-open.webp");
            setNavBurger("nav-burger");
            setHeaderContainer("header-container-open");
            setMenuList("menu-list-open");
            setNameMenu("name-menu-close");
            setRefreshPage("refresh-page-close");
        } else {
            setBurgerImgIcon("/assets/img/burger-menu/burger-menu-close.webp");
            setNavBurger("nav-menu");
            setHeaderContainer("header-container");
            setMenuList("menu-list-close");
            setNameMenu("name-menu-open");
            setRefreshPage("refresh-page-open");
        }
    }

    return (
        <header>
            <div className={`header-container ${headerContainer}`}>
                <div className="burger-menu-contener">
                    <button className="burger-menu" onClick={switchBurgerIcon}>
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
