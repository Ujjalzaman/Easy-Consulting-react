
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import ReviewForm from './ReviewFrom';
import './Review.css';
import { Link } from 'react-router-dom';
import userImg from '../../../../Assets/user.svg';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import toast from 'react-hot-toast';
import swal from 'sweetalert';
import { useAppContext } from '../../../../context';
import { useFetchData } from '../../hooks/useFetchData';


const Review = () => {
    const { user: { email, img } } = useContext(UserContext);
    const [review, setIsUpdated] = useFetchData(`https://immense-river-40491.herokuapp.com/userReview?email=${email}`, {}, [email]);
    const { _id, name, address, description } = review || {};

    const handleDelete = (id) => {
        setIsUpdated(false)
        swal({
            title: "Are you sure?",
            text: "Are you sure! you want to delete the review?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then(wantDelete => {
                if (wantDelete) {
                    const loading = toast.loading('deleting...Please wait!')
                    axios.delete(`https://immense-river-40491.herokuapp.com/deleteReview/${id}`)
                        .then(res => {
                            toast.dismiss(loading)
                            if (res) {
                                setIsUpdated(true);
                                toast.success('Your review has been deleted successfully!');
                            }
                            else {
                                toast.error('Something went wrong, please try again');
                            }
                        })
                        .catch(err => {
                            toast.dismiss(loading)
                            swal({
                                title: "Failed!",
                                text: 'Something went wrong, please try again',
                                icon: "error",
                            });
                        })
                }
            });
    }
    return (
        <div>
            {description ?
                <div className="userReviewBox">
                    <div className="review col-md-6 mx-auto">
                        {img ? <img src={img} alt="" /> :
                            <img src={`${userImg}`} alt="" />}
                        <h5 className="testimonialName">{name}</h5>
                        <h6 className="testimonialAddress">{address}</h6>
                        <p><i>{description}</i></p>
                    </div>
                    <Button as={Link} to={`/dashboard/review/${_id}`} variant="outline-success"> <FontAwesomeIcon icon={faEdit} /> Edit</Button>
                    <Button variant="outline-danger" onClick={() => handleDelete(_id)}> <FontAwesomeIcon icon={faTrashAlt} /> Delete</Button>
                </div>
                :
                <ReviewForm setIsUpdated={setIsUpdated} />
            }
        </div>
    );
};

export default Review;