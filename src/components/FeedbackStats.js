import React, { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {
    const { feedback } = useContext(FeedbackContext);
    let average = feedback.reduce((pv, cv) => {
        return pv + cv.rating
    }, 0) / feedback.length;

    return (
        <div className='feedback-stats'>
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating: {isNaN(average) ? 0 : average.toFixed(1)}</h4>
        </div>
    )
}

export default FeedbackStats