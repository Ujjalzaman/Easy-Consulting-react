import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import ReviewForm from './ReviewFrom';
import './Review.css';
import { Link } from 'react-router-dom';
import img from '../../../../Assets/user.svg';;
// import axios from 'axios';
// import { UserContext } from '../../../../App';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
// import { faEdit } from '@fortawesome/free-regular-svg-icons';
// import toast from 'react-hot-toast';
// import swal from 'sweetalert';


const Review = () => {
    // const { user: {email, img} } = useContext(UserContext);
    // const [review, setReview] = useState({});
    const [isUpdated, setIsUpdated] = useState(false)
    // const {_id, name, address, description} = review || {};
    // useEffect(() => {
    //     axios(`https://trusted-tech.herokuapp.com/userReview?email=${email}`)
    //     .then(res => {
    //         setReview(res.data[0]);
    //     })
    // }, [email, isUpdated])

    const handleDelete = (id) => {
        // setIsUpdated(false)
        // swal({
        //     title: "Are you sure?",
        //     text: "Are you sure! you want to delete the review?",
        //     icon: "warning",
        //     buttons: true,
        //     dangerMode: true,
        //   })
        //   .then( wantDelete => {
        //     if (wantDelete) {
        //         const loading = toast.loading('deleting...Please wait!')
        //         axios.delete(`https://trusted-tech.herokuapp.com/deleteReview/${id}`)
        //         .then(res => {
        //             toast.dismiss(loading)
        //             if(res){
        //                 setIsUpdated(true);
        //                 toast.success('Your review has been deleted successfully!');
        //             }
        //             else{
        //                 toast.error('Something went wrong, please try again');
        //             }
        //         })
        //         .catch(err => {
        //             toast.dismiss(loading)
        //             swal({
        //                 title: "Failed!",
        //                 text: 'Something went wrong, please try again',
        //                 icon: "error",
        //               });
        //         })
        //     } 
        //   });
    }
    return (
        <div>
            <div className="userReviewBox">
                <div className="review col-md-6 mx-auto">
                    { img ? <img src={img} alt=""/>:
                    <img src={`${img}`} alt=""/>}
                </div>
        
            </div>
            <ReviewForm/>
         
        </div>
    );
};

export default Review;