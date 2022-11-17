import { createContext, useState, useEffect } from 'react';
import FeedbackData from '../data/FeedbackData';

// Create the context
const FeedbackContext = createContext();


// Export the provider
export const FeedbackProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState([])
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        editMode: false
    })

    useEffect(() => {
        fetchFeedback()
    }, [])

    const fetchFeedback = async () => {
        const repsonse = await fetch(`/feedback?_sort=id&_order=desc`)
        const data = await repsonse.json()
        setFeedback(data)
        setIsLoading(false)
    }

    const deleteFeedback = async (id) => {
        if (window.confirm("Do you want to delete this feedback?")) {
            await fetch(`/feedback/${id}`, {
                method: 'DELETE'
            })
            setFeedback(feedback.filter(item => item.id !== id))
        }
    }

    const addFeedback = async (newFeedback) => {
        const response = await fetch(`/feedback`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback)
        })

        const data = response.json()
        setFeedback([data, ...feedback])
    }

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            editMode: true
        })
    }

    const updateFeedback = async (id, updatedItem) => {
        const response = await fetch(`/feedback/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedItem)
        })

        const data = await response.json();

        setFeedback(feedback.map((item) => (item.id === id ?
            {
                ...item, data
            }      
            : item)))
    }

    return (
        <FeedbackContext.Provider value={{
            isLoading: isLoading,
            feedback: feedback,
            deleteFeedback: deleteFeedback,
            addFeedback: addFeedback,
            editFeedback: editFeedback,
            feedbackEdit: feedbackEdit,
            updateFeedback: updateFeedback
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext;
