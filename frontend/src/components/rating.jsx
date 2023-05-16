import React from "react";
import ReactStars from "react-rating-stars-component";

function Rating({ rating, ratingNum }) {
  return (
    <div className="d-flex  align-items-center gap-3">
      <ReactStars
        size={30}
        count={5}
        value={rating}
        isHalf={true}
        edit={false}
      />
      <p style={{ margin: 0 }}> {ratingNum} Reviews</p>
    </div>
  );
}

export default Rating;
