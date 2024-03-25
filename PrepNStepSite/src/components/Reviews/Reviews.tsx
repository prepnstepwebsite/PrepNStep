//Reviews.tsx

import "react";
import "./reviews.scss";

interface Review {
  name: string;
  date: string;
  content: string;
  rating: number;
  profilePicUrl: string;
}

export const ReviewCard: React.FC<{ review: Review }> = ({ review }) => {
  return (
    <div className="review-card">
      <div className="reviewer-name">{review.name}</div>
      <div className="review-header">
        <div className="review-profile-pic">
          <img src={review.profilePicUrl} alt={review.name} />
        </div>
        <div className="review-stars">{"★★★★★"}</div>
        <div className="review-date">{review.date}</div>
      </div>
      <div className="review-content">{review.content}</div>
    </div>
  );
};

export default ReviewCard;
