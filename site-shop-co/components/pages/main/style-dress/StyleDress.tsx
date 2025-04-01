import React from 'react';
import styles from './StyleDress.module.css';


const StyleDress: React.FC = () => {

    interface DressItemElements {
        name: string;
        pathImg: string;
        alt: string;
    }

    const dressItems: DressItemElements[] = [
        {name:"Casual", pathImg: "/assets/dev-site/shop-co/style-dress/casual.png", alt:"casual"},
        {name: "Formal", pathImg: "/assets/dev-site/shop-co/style-dress/formal.png", alt:"formal"},
        {name: "Party", pathImg: "/assets/dev-site/shop-co/style-dress/party.png", alt:"party"},
        {name: "Gym", pathImg: "/assets/dev-site/shop-co/style-dress/gym.png", alt:"gym"},
    ]


    return (
        <div className={styles.container}>
            <h3 className={styles.h3}>browse by dress style</h3>
            <div className={styles.dress__item}>

                <div className={styles.dress__item__one_line}>
                    <a href="/my-projects/site-shop-co" className={styles.dress__item__image__link}>
                        <div className={styles.dress__item__image__link__img_box}>
                            <img src={dressItems[0].pathImg} alt={dressItems[0].alt} />
                        </div>
                        <p className={styles.dress__item__image__link_p}>{dressItems[0].name}</p>
                    </a>
                    <a href="/my-projects/site-shop-co" className={styles.dress__item__image__link_responsive}>
                        <div className={styles.dress__item__image__link__img_box}>
                            <img src={dressItems[1].pathImg} alt={dressItems[1].alt} />
                        </div>
                        <p className={styles.dress__item__image__link_p}>{dressItems[1].name}</p>
                    </a>
                </div>

                <div className={styles.dress__item__two_line}>
                    <a href="/my-projects/site-shop-co" className={styles.dress__item__image__link_responsive}>
                        <div className={styles.dress__item__image__link__img_box}>
                            <img src={dressItems[2].pathImg} alt={dressItems[2].alt} />
                        </div>
                        <p className={styles.dress__item__image__link_p}>{dressItems[2].name}</p>
                    </a>
                    <a href="/my-projects/site-shop-co" className={styles.dress__item__image__link}>
                        <div className={styles.dress__item__image__link__img_box}>
                            <img src={dressItems[3].pathImg} alt={dressItems[3].alt} />
                        </div>
                        <p className={styles.dress__item__image__link_p}>{dressItems[3].name}</p>
                    </a>
                </div>

            </div>
        </div>
    );
};

export default StyleDress;