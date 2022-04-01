import { useState, useEffect } from 'react';
import axios from 'axios';

const ShopReviews = (props) => {

    const [ reviews, setReviews ] = useState([]);

    const getReviews= async () => {
        const res = await axios.get('http://localhost:3001/reviews')
        let selectedReviews = []
        res.data.reviews.forEach((review) => {
            if(review.shop_id === props.shop._id) {
                selectedReviews.push(review)
            }
        })
        setReviews(selectedReviews)
        console.log(reviews)
    }

    useEffect (() => {
        getReviews();  
    }, [props])
    return (
        <div className = "shop-reviews-container">
            <div className="reviews-header">
            <h3>Shop Reviews</h3>
            </div>

        {
        reviews.map((review) => {
            return (
                <div className="shop-review">
                    <h3>{review.name}</h3>
                    <h4>Rating: {review.rating} / 10</h4>
                    <h4>{review.content}</h4>
                </div>
            )
        })
        }
        </div>
    )
}

export default ShopReviews;