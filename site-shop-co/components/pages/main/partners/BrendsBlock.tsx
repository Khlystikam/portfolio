import React from 'react';
import './BrendsBlock.css';

const BrendsBlock: React.FC = () => {

    interface ItemBrand {
        name: string;
		pathImg: string;
	}

    const imgBrand:ItemBrand[] = [
        {name:"versace", pathImg:"/assets/dev-site/shop-co/brends/brend_1.png"},
        {name:"zara", pathImg:"/assets/dev-site/shop-co/brends/brend_2.png"},
        {name:"gucci", pathImg:"/assets/dev-site/shop-co/brends/brend_3.png"},
        {name:"prada", pathImg:"/assets/dev-site/shop-co/brends/brend_4.png"},
        {name:"calvin klein", pathImg:"/assets/dev-site/shop-co/brends/brend_5.png"},
    ];

    const itemsImgBrand:React.ReactElement[] = imgBrand.map(element => {
        return (
            <div className="brends-block-item">
                <img className="brends-block-item-img" src={ element.pathImg } alt={ element.name } />
            </div>
        )
    });

    return (
        <div className='brends-block-container'>
            <div className="brends-block">
                { itemsImgBrand }
            </div>
        </div>
    );
};

export default BrendsBlock;