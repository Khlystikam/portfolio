import React from "react";

interface StarRatingProps {
    rating: number;
    maxStars?: number;
};

const StarRating: React.FC<StarRatingProps> = ({ rating, maxStars = 5 }) => {
    return (
        <div style={{ display: "flex", gap: "4px" }}>
            {[...Array(maxStars)].map((_, i) => {
                const starValue = i + 1;
                return (
                    <span className="star-rating__item" key={i} style={{ color: starValue <= rating ? "#FFD700" : "#ccc" }}>
                        {starValue - rating < 1 && starValue - rating > 0 ? "★" : starValue <= rating ? "★" : "☆"}
                    </span>
                );
            })}
        </div>
    );
};

export default StarRating;
