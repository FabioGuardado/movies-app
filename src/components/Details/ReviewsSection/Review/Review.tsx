import React, { useState } from 'react';
import IReview from '../../../../interfaces/IReview';

import defaultImage from '../../../../assets/user.png';

const Review: React.FunctionComponent<ReviewProps> = ({ review }) => {
  const [fullText, setFullText] = useState<boolean>(false);
  return (
    <div className="py-5 px-8 mb-5 shadow border border-solid border-gray-200 rounded-md">
      <div className="mb-5 flex flex-row items-center">
        <div className="review-author-image">
          <img
            className="rounded-full"
            src={
              review.author_details.avatar_path &&
              !review.author_details.avatar_path.includes('gravatar')
                ? `${import.meta.env.VITE_IMAGE_URL}${
                    review.author_details.avatar_path
                  }`
                : defaultImage
            }
            alt={review.id}
          />
        </div>
        <div className="ml-3">
          <h3 className="font-bold">{review.author}</h3>
          <span className="font-light text-sm">{review.created_at}</span>
        </div>
      </div>
      <div>
        <p className={fullText ? 'review-full-text' : 'review-compact-text'}>
          {review.content}
        </p>
      </div>
      <div className="pt-5 pb-2">
        <button
          onClick={() => setFullText(!fullText)}
          className="py-2 px-5 bg-blue-800 text-base text-white rounded-md cursor-pointer transition-all hover:bg-blue-700"
        >
          {!fullText ? 'Expand' : 'Collapse'}
        </button>
      </div>
    </div>
  );
};

export default Review;

type ReviewProps = {
  review: IReview;
};
