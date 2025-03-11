import './banners-main.css';


const BannersMain = () => {
  return (
    <div className='main-banners'>
        <div className="banners-main banner-1">
            <img src="/assets/dev-site/morent/bg-banner-1.png" alt="" className="banner-box-img" />
            <div className="banner-box-text">
              <p className="banner-text-name">The Best Platform for Car Rental</p>
              <p className="banner-text-description">Ease of doing a car rental safely and reliably. Of course at a low price.</p>
              <button className="btn-main-banners btn-main-banner-1">Rental Car</button>
            </div>
        </div>
        <div className="banners-main banner-2">
          <img src="/assets/dev-site/morent/bg-banner-2.png" alt="" className="banner-box-img" />
          <div className="banner-box-text">
            <p className="banner-text-name">Easy way to rent a car at a low price</p>
            <p className="banner-text-description">Providing cheap car rental services and safe and comfortable facilities.</p>
            <button className="btn-main-banners btn-main-banner-2">Rental Car</button>
          </div>
        </div>
    </div>
  );
};

export default BannersMain;