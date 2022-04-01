import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const WriteReview = (props) => {
    const [ name, setName ] = useState('')
    const [ rating, setRating ] = useState(null)
    const [ content, setContent ] = useState('')
    const [ reviewSent, setReviewSent ] = useState(false)

    let navigate = useNavigate();

    const handleName = (e) => {
        setName(e.target.value)
        }

    const handleRating = (e) => {
        setRating(e.target.value)
        }
    
    const handleContent = (e) => {
        setContent(e.target.value)
        }

    const submitReview = async () => {
        await axios.post(`/reviews`, {
            name: name,
            rating: rating,
            content: content,
            shop_id: props.shop._id
          })
          .then(function (response) {
            setReviewSent(true);
            console.log(response);
            navigate(`/shops/${props.shop._id}`)
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    useEffect(() => {
        return () => {
            setReviewSent(false)
        }
       }, [reviewSent])  

    return (
        <div className="review-form">
            <h3>Write a review!</h3>
            <input
                className="review-input"
                type="text"
                name="name"
                placeholder="Your Name" 
                onChange={(e) => handleName(e, 'num')}
                />
            <input
                className="review-input"
                type="number"
                name="rating"
                placeholder="Your Rating"
                onChange={(e) => handleRating(e, 'num')}
                />
            <textarea
                className="review-input"
                type="text" 
                name="content"
                rows="5"
                placeholder="Your Thoughts" 
                onChange={(e) => handleContent(e, 'num')}
                ></textarea>
            <button className="submit-button" type="submit" onClick={() => submitReview()}>Submit</button>
        </div>
    )
}

export default WriteReview;