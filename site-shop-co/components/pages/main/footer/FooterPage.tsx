import React from 'react';
import styles from './FooterPage.module.css';

const FooterPage: React.FC = () => {

    type ListItem = {
        label: string;
        link: string;
    };
    
    type ListData = {
        title: string;
        items: ListItem[];
    };

    const links: ListData[] = [
        {
            title: 'Company',
            items: [
                { label: 'About', link: '/my-projects/site-shop-co' },
                { label: 'Features', link: '/my-projects/site-shop-co' },
                { label: 'Works', link: '/my-projects/site-shop-co' },
                { label: 'Career', link: '/my-projects/site-shop-co' },
            ],
        },

        {
            title: 'Help',
            items: [
                { label: 'Customer Support', link: '/my-projects/site-shop-co' },
                { label: 'Delivery Details', link: '/my-projects/site-shop-co' },
                { label: 'Terms & Conditions', link: '/my-projects/site-shop-co' },
                { label: 'Privacy Policy', link: '/my-projects/site-shop-co' },
            ],
        },

        {
            title: 'FAQ',
            items: [
                { label: 'Account', link: '/my-projects/site-shop-co' },
                { label: 'Manage Deliveries', link: '/my-projects/site-shop-co' },
                { label: 'Orders', link: '/my-projects/site-shop-co' },
                { label: 'Payments', link: '/my-projects/site-shop-co' },
            ],
        },

        {
            title: 'Resources',
            items: [
                { label: 'Free eBooks', link: '/my-projects/site-shop-co' },
                { label: 'Development Tutorial', link: '/my-projects/site-shop-co' },
                { label: 'How to - Blog', link: '/my-projects/site-shop-co' },
                { label: 'Youtube Playlist', link: '/my-projects/site-shop-co' },
            ],
        },
    ];

    return (
        <footer className={styles.footer__container}>
            <div className={styles.footer__box}>
                <div className={styles.logo_social__box}>
                    <div className={styles.footer__box_logo}>
                        <a href="/my-projects/site-shop-co" className={styles.footer__logo_a}>SHOP.CO</a>
                    </div>
                    <p className={styles.footer__logo_text}>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                    <div className={styles.social_media__box}>
                        <a href="/my-projects/site-shop-co" className={styles.footer__social_media_a}>
                            <img src="/assets/dev-site/shop-co/footer/1.svg" alt="Facebook" className={styles.footer__social_media_icon} />
                        </a>
                        <a href="/my-projects/site-shop-co" className={styles.footer__social_media_a}>
                            <img src="/assets/dev-site/shop-co/footer/2.svg" alt="Instagram" className={styles.footer__social_media_icon} />
                        </a>
                        <a href="/my-projects/site-shop-co" className={styles.footer__social_media_a}>
                            <img src="/assets/dev-site/shop-co/footer/3.svg" alt="Twitter" className={styles.footer__social_media_icon} />
                        </a>
                        <a href="/my-projects/site-shop-co" className={styles.footer__social_media_a}> 
                            <img src="/assets/dev-site/shop-co/footer/4.svg"alt="Pinterest" className={styles.footer__social_media_icon} />
                        </a>
                    </div>
                </div>

                <nav className={styles.footer__box_navigation}>
                    {links.map((link, index) => (
                        <div key={index} className={styles.footer__box_list}>
                            <h4 className={styles.footer__list_h4}>{link.title}</h4>
                            <ul className={styles.footer__list_ul}>
                                {link.items.map((item, index) => (
                                    <li key={index} className={styles.footer__list_li}>
                                        <a href={item.link}>{item.label}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </nav>
            </div>
        </footer>
    );
};

export default FooterPage;