import React from 'react';
import StarRating from '../star-rating/StarRating';
import styles from './CarouselReviewsComp.module.css';
import { useState } from 'react';

interface ReviewItem {
    name: string;
    rating: number;
    description: string;
    verified?: boolean;
}

interface Props {
    reviewsItems: ReviewItem[];
    width?: string;
    height?: string;
    bgColor?: string;
}

const CarouselReviewsComp: React.FC<Props> = ({
    reviewsItems,
    width = "",
    height="",
    bgColor="",
}) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage:number = 4;

    // Получаем текущую группу отзывов
    const getCurrentReviews = () => {
        const result: ReviewItem[] = [];
    
        for (let i = 0; i < itemsPerPage; i++) {
            const index = (currentIndex + i) % reviewsItems.length;
            result.push(reviewsItems[index]);
        }
    
        return result;
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewsItems.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => 
            (prevIndex - 1 + reviewsItems.length) % reviewsItems.length
        );
    };

    if (reviewsItems.length === 0) {
        return <div>No reviews available</div>;
    }

    const currentReviews = getCurrentReviews();

    return (
        <div className={styles.container}>
            <img
                src='/assets/dev-site/shop-co/current-reviews/arrow-down-back.png'
                className={styles.prevButton}
                onClick={handlePrev}
                alt='arrow back'>
            </img>
            {currentReviews.map((review, index) => (
                <div className={styles.carousel} style={{ width, height, backgroundColor: bgColor }}>
                    <div className={styles.reviewGroup}>
                        <div key={index} className={styles.reviewItem}>
                            <div className={styles.reviewContent}>
                                <StarRating rating = {review.rating} fontSaze='30px' />
                                <div className={styles.nameVerification}>
                                    <p className={styles.name}>{review.name}</p>
                                    {review.verified && <img src='/assets/dev-site/shop-co/current-reviews/verification.png' alt='verification' className={styles.verifiedIcon} />}
                                </div>
                                <p className={styles.description}>{review.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <img
                src='/assets/dev-site/shop-co/current-reviews/arrow-down-next.png'
                className={styles.nextButton} onClick={handleNext}
                alt='arrow next'>
            </img>
        </div>
    );
};

export default CarouselReviewsComp;