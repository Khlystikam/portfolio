import React from 'react';
import './footer-site.css';

const Footer: React.FC = () => {

    const dateAbout:{ text: string; link: string }[] = [
        { text: "How it works", link: "/dev-sites/site-morent" },
        { text: "Featured", link: "/dev-sites/site-morent" },
        { text: "Partnership", link: "/dev-sites/site-morent" },
        { text: "Business Relation", link: "/dev-sites/site-morent" },
    ];

    const dateСommunity:{ text: string; link: string }[] = [
        { text: "Events", link: "/dev-sites/site-morent" },
        { text: "Blog", link: "/dev-sites/site-morent" },
        { text: "Podcast", link: "/dev-sites/site-morent" },
        { text: "Invite a friend", link: "/dev-sites/site-morent" },
    ];

    const dateSocials:{ text: string; link: string }[] = [
        { text: "Discord", link: "/dev-sites/site-morent" },
        { text: "Instagram", link: "/dev-sites/site-morent" },
        { text: "Twitter", link: "/dev-sites/site-morent" },
        { text: "Facebook", link: "/dev-sites/site-morent" },
    ];

    return (
        <footer>
            <div className="footer-content">
                <div className="footer-logo">
                    <a href='/dev-sites/site-morent' className='logo-footer'>MORENT</a>
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
                    <a href="/dev-sites/site-morent">
                        <p>Privacy & Policy</p>
                    </a>
                    <a href="/dev-sites/site-morent">
                        <p>Terms & Condition</p>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;