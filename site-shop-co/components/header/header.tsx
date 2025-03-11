import React from 'react';
import './header.css';

const Header: React.FC = () => {
    return (
        <div className="header__shop-co">
            <div className="header__container__shop-co">
                <div className="header__logo__shop-co">
                    <a href="/my-projects/site-shop-co">SHOP.CO</a>
                </div>
                <nav className="header__nav__shop-co">
                    <ul className="header__nav-list__shop-co">
                        <li className="header__nav-item__shop-co">
                            <a href="/">Shop</a>
                        </li>
                        <li className="header__nav-item__shop-co">
                            <a href="/">On Sale</a>
                        </li>
                        <li className="header__nav-item__shop-co">
                            <a href="/">New Arrivals</a>
                        </li>
                        <li className="header__nav-item__shop-co">
                            <a href="/">Brands</a>
                        </li>
                    </ul>
                </nav>
                <div className="header__search__shop-co">
                    search
                </div>
                <div className="header__account__shop-co">
                    <div className="header__account-icons__shop-co">
                        <a href="/" className="header__account-link__shop-co">
                            <img src="/assets/dev-site/shop-co/account-basket/basket.png"
                                alt="basket"
                                className="header__account-icon__shop-co"
                            />
                        </a>
                        <a href="/" className="header__account-link__shop-co">
                            <img src="/assets/dev-site/shop-co/account-basket/account.png"
                                alt="account"
                                className="header__account-icon__shop-co"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;