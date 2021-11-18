import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams,useNavigate  } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { UserContext } from '../../../../App';
import swal from 'sweetalert';

const ReviewForm = ({setIsUpdated}) => {
    const {user: {email, img}} = useContext(UserContext)
    const {id} = useParams();
    const { register, handleSubmit, reset } = useForm();
    const [review, setReview] = useState({});
    const {name, address, description} = review;
    useEffect(() => {
        axios(`https://immense-river-40491.herokuapp.com/userReview/${id}`)
        .then(res => {
            setReview(res.data[0]);
        })
    }, [id])
    
    const history = useNavigate ();
    const onSubmit = data => {
        const loading = toast.loading('Uploading...Please wait!');
        const reviewData = {...data};
            reviewData.email = review.email || email;
            reviewData.img = review.img || img;
        if(id){
            axios.patch(`https://immense-river-40491.herokuapp.com/updateReview/${id}`, reviewData)
            
            .then(res => {
                if(res){
                    toast.dismiss(loading);
                    if(
                        data.name === name &&
                        data.address === address &&
                        data.description === description
                        ){
                            toast.error("You haven't changed anything")
                        }else{
                            toast.success('your review was successful updated!');
                        }
                    history.push('/dashboard/review');
                }
            })
        }else {
            setIsUpdated(false)
            axios.post('https://immense-river-40491.herokuapp.com/addReview', reviewData)
            .then(res => {
                if(res){
                    setIsUpdated(true)
                    toast.dismiss(loading);
                    swal("Success!", "Your review has been submitted successfully. We appreciate your contirbution.", "success");
                }
            })
        }
        reset();
    }
    return (
        <section className='px-3'>
            <div className="mx-auto reviewForm">
                <Form onSubmit={handleSubmit(onSubmit)} className="w-100">
                        <Row className="justify-content-center px-4">
                            <Form.Group as={Col} md={12}>
                                <Form.Label style={{ fontWeight: "bold" }}>Your Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    defaultValue={name || ""}
                                    {...register("name", { required: true })}
                                    placeholder="Your Name" />
                            </Form.Group>
                            <Form.Group as={Col} md={12}>
                                <Form.Label style={{ fontWeight: "bold" }}>Address</Form.Label>
                                <Form.Control
                                    type="text"
                                    defaultValue={address || ""}
                                    {...register("address", { required: true })}
                                    placeholder="Address" />
                            </Form.Group>
                            <Form.Group as={Col} md={12}>
                                <Form.Label style={{ fontWeight: "bold" }}>Description</Form.Label>
                                <Form.Control
                                    style={{ height: "10rem" }}
                                    type="text"
                                    defaultValue={description || ""}
                                    as="textarea"
                                    {...register("description", { required: true })}
                                    placeholder="Description" />
                            </Form.Group>
                        </Row>
                        <div className="text-center mt-1">
                            <Button type="submit" className="mainBtn">
                                {id ? 'update': 'submit'}
                            </Button>
                        </div>
                </Form>
            </div>
        </section>
    );
};

export default ReviewForm;