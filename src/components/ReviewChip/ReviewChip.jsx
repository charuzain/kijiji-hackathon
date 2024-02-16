import React from 'react';
import './ReviewChip.scss'; //
const ReviewChip = ({ number, compliment }) => {
  return (
    <div className="review-chip">
      <div className="review-chip__number">{number}</div>
      <div className="review-chip__compliment">{compliment}</div>
    </div>
  );
};

export default ReviewChip;
