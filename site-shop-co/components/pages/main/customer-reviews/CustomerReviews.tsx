import React from 'react';
import CarouselReviewsComp from '../../../functions/carousel-reviews/CarouselReviewsComp';
import styles from './CustomerReviews.module.css';

interface ReviewItem {
    name: string;
    rating: number;
    description: string;
    verified?: boolean;
}

const CustomerReviews: React.FC = () => {

    const reviews: ReviewItem[] = [
        {
            name: "Alexey",
            rating: 3,
            description: "Great service! Fast delivery, the product matches the description. I recommend it!",
            verified: true,
        },
        {
            name: "Marina",
            rating: 4,
            description: "Good quality, but the delivery was delayed by a couple of days. Overall satisfied.",
            verified: false,
        },
        {
            name: "Ivan",
            rating: 3,
            description: "Not bad, but I expected more. The product arrived with a small defect, although functionality was unaffected.",
            verified: false,
        },
        {
            name: "Ekaterina",
            rating: 5,
            description: "Superb! Everything is top-notch. Will order again!",
            verified: true,
        },
        {
            name: "Dmitry",
            rating: 2,
            description: "Disappointed. Received the wrong item. Had to return it.",
            verified: true,
        },
        {
            name: "Olga",
            rating: 5,
            description: "The best service I've tried! Fast, high quality, and polite staff.",
            verified: true,
        },
        {
            name: "Sergey",
            rating: 1,
            description: "Terrible service. The product broke the next day, and support refused to accept a return.",
            verified: false,
        },
        {
            name: "Anna",
            rating: 4,
            description: "I liked it, though there were a few minor issues. Overall worth the price.",
            verified: true,
        },
        {
            name: "Pavel",
            rating: 5,
            description: "Perfect! Fast, accurate, no problems. Thanks for the excellent work!",
            verified: false,
        },
        {
            name: "Natalia",
            rating: 3,
            description: "So-so. Nothing special, but nothing bad either.",
            verified: true,
        }
    ];


    return (
        <div className={styles.container}>
            <h3 className={styles.h3}>OUR HAPPY CUSTOMERS</h3>

            <div className={styles.carusel__reviews_container}>
                <div className={styles.container__no_blur}>
                    <CarouselReviewsComp
                        reviewsItems={reviews}
                        width = "400px"
                        height="240px"
                        bgColor="#0000000f"
                    />
                </div>
            </div>

        </div>
    );
};

export default CustomerReviews;