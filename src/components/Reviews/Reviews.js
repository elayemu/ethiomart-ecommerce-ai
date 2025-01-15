import React, { useState } from 'react';

function Reviews({ productId }) {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const submitReview = () => {
        // Logic to submit the review (e.g., API call)
    };

    return (
        <div>
            <h3>Leave a Review</h3>
            <input 
                type="number" 
                value={rating} 
                onChange={e => setRating(e.target.value)} 
                max="5" 
                min="1" 
                placeholder="Rating (1-5)"
            />
            <textarea 
                value={comment} 
                onChange={e => setComment(e.target.value)} 
                placeholder="Your review"
            />
            <button onClick={submitReview}>Submit Review</button>
        </div>
    );
}

export default Reviews;