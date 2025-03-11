import React from 'react';
import './footer-site.css';

const Footer: React.FC = () => {

    const dateAbout:{ text: string; link: string }[] = [
        { text: "How it works", link: "/" },
        { text: "Featured", link: "/" },
        { text: "Partnership", link: "/" },
        { text: "Business Relation", link: "/" },
    ];

    const dateСommunity:{ text: string; link: string }[] = [
        { text: "Events", link: "/" },
        { text: "Blog", link: "/" },
        { text: "Podcast", link: "/" },
        { text: "Invite a friend", link: "/" },
    ];

    const dateSocials:{ text: string; link: string }[] = [
        { text: "Discord", link: "/" },
        { text: "Instagram", link: "/" },
        { text: "Twitter", link: "/" },
        { text: "Facebook", link: "/" },
    ];

    return (
        <footer>
            <div className="footer-content">
                <div className="footer-logo">
                    <a href='/' className='logo-footer'>MORENT</a>
                    <p>Our vision is to provide convenience and help increase your sales business.</p>
                </div>
                <div className="about-box">
                    <div className="about-content">
                        <p>About</p>
                        <ul>
                            {dateAbout.map((item, index) => (
                                <li key={index}>
                                    <a href={item.link}>{item.text}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="community-content">
                        <p>Community</p>
                        <ul>
                            {dateСommunity.map((item, index) => (
                                <li key={index}>
                                    <a href={item.link}>{item.text}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="socials-content">
                        <p>Socials</p>
                        <ul>
                            {dateSocials.map((item, index) => (
                                <li key={index}>
                                    <a href={item.link}>{item.text}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
            <div className="footer-info-links">
                <div className="footer-info-links-morent">
                    <p>©2022 MORENT. All rights reserved</p>
                </div>
                <div className="footer-info-links-privacy">
                    <a href="/">
                        <p>Privacy & Policy</p>
                    </a>
                    <a href="/">
                        <p>Terms & Condition</p>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;