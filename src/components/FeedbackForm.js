import React, { useState, useContext, useEffect } from 'react'
import RatingSelect from './RatingSelect';
import Button from './shared/Button';
import Card from './shared/Card'
import FeedbackContext from '../context/FeedbackContext';

function FeedbackForm() {
    const [text, setText] = useState("");
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [message, setMessage] = useState("");
    const [rating, setRating] = useState(10);

    //Context
    const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext);

    useEffect(() => {
        if (feedbackEdit.editMode === true) {
            setButtonDisabled(false);
            setText(feedbackEdit.item.text);
            setRating(feedbackEdit.item.rating);
        }
    }, [feedbackEdit])

    const handleTextChange = (e) => {
        setText(e.target.value);

        if (text.length > 10) {
            setButtonDisabled(false);
            setMessage("");
        } else {
            setMessage("Please provide at least 10 characters.");
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim().length > 10) {
            const newFeedBack = {
                text: text,
                rating: rating
            }

            if (feedbackEdit.editMode === true) {
                updateFeedback(feedbackEdit.item.id, newFeedBack)
            } else {
                addFeedback(newFeedBack);
            }
            setText('');
        }
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>Rate our service</h2>
                <RatingSelect select={(rating) => setRating(rating)} />
                <div className='input-group'>
                    <input
                        onChange={handleTextChange}
                        type='text'
                        placeholder='Write a review'
                        value={text}
                    />
                    <Button type='submit' isDisabled={buttonDisabled}> SEND </Button>
                </div>
                {message && <p className='message'>{message}</p>}
            </form>
        </Card>
    )
}

export default FeedbackForm