import style from './FormSubscribeBottom.module.css';

const FormSubscribeBottom = () => {
    return (
        <div className={style.formSubscribeBottom__content}>
            <div className={style.formSubscribe__box}>
                <div className={style.formSubscribe__text}>
                    <p className={style.formSubscribe__text_p}>
                        STAY UPTO DATE ABOUT OUR LATEST OFFERS
                    </p>
                </div>

                <div className={style.formSubscribe__form_box}>
                    <form
                        className={style.formSubscribe__form}
                        action="">
                        <input 
                            className={style.formSubscribe__input} 
                            type="email" 
                            placeholder="Enter your email address" 
                            required
                        />
                    </form>

                    <button
                        className={style.formSubscribe__button}
                        type="submit">
                        
                        Subscribe to Newsletter
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FormSubscribeBottom;