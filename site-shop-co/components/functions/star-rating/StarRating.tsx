import React from "react";
import styles from './StarRating.module.css';

interface StarRatingProps {
    rating: number;
    maxStars?: number;
    fontSaze?: string;
};

const StarRating: React.FC<StarRatingProps> = ({ rating, fontSaze = "25px", maxStars = 5 }) => {
    return (
        <div style={{ display: "flex", gap: "4px" }}>
            {[...Array(maxStars)].map((_, i) => {
                const starValue = i + 1;
                return (
                    <span className={styles.stars} key={i} style={{ color: starValue <= rating ? "#FFD700" : "#ccc", fontSize: fontSaze }}>
                        {starValue - rating < 1 && starValue - rating > 0 ? "★" : starValue <= rating ? "★" : "☆"}
                    </span>
                );
            })}
        </div>
    );
};

export default StarRating;
