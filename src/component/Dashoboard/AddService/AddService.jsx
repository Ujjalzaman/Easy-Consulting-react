// import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
// import toast from 'react-hot-toast';
// import swal from 'sweetalert';
import './AddService.css'

const AddService = ({edit, setEdit, services}) => {
    const { register, handleSubmit, reset } = useForm();
    const [imgURL, setImgURL] = useState(null);
    const [service, setService] = useState({})
    const [isDisabled, setIsDisabled] = useState(false);
    const {name, price, description, img} = service || {};

    // useEffect(() => {
    //     const getService = services?.find(({_id}) => _id === edit);
    //     setService(getService)
    // }, [edit, services])

    const onSubmit = data => {
        // const loading = toast.loading('Uploading...');
        // const serviceInfo = {
        //     ...data,
        //     img: imgURL || img
        // }

        // if(edit){
        //     axios.patch(`https://trusted-tech.herokuapp.com/updateService/${edit}`, serviceInfo)
        //     .then(res =>{
        //         toast.dismiss(loading)
        //         if( data.name === name  && 
        //             data.price === price &&
        //             data.description === description){
        //                 toast.error("You haven't change anything")
        //             }
        //             else{
        //                 toast.success('Service updated successfully')
        //             }
        //         setEdit(null)
        //     })
        // }else{
        //     axios.post('https://trusted-tech.herokuapp.com/addService', serviceInfo)
        //     .then(res => {
        //         toast.dismiss(loading)
        //         if(res.data){
        //             swal('Success!', 'One new service added successfully', 'success')
        //             reset()
        //         }
        //     })
        //     .catch( error => {
        //         toast.dismiss(loading)
        //         toast.error(error.message)
        //     });
        // }
    }

    const handleImgUpload = event => {
        // const loading = toast.loading('Image uploading...');
        // setIsDisabled(true)
        // const imgData = new FormData();
        // imgData.set('key', '158d6aaa1f29311c98e50373ddc8e3d6');
        // imgData.append('image', event.target.files[0])
        // axios.post('https://api.imgbb.com/1/upload', imgData)
        // .then( response => {
        //     toast.dismiss(loading)
        //     toast.success('Image successfully uploaded')
        //     setImgURL(response.data.data.url)
        //     setIsDisabled(false)
        // })
        // .catch( error => {
        //     toast.dismiss(loading)
        //     toast.error(error.message)
        // });
    }
    return (
        <div className="px-2">
            <Form onSubmit={handleSubmit(onSubmit)} className="addServiceForm">
                <Row className="justify-content-center px-4">
                    <Form.Group as={Col} md={7}>
                        <Form.Label style={{ fontWeight: "bold" }}>Service Name</Form.Label>
                        <Form.Control
                            type="text"
                            defaultValue={name}
                            {...register("name", { required: true })}
                            placeholder="Your Name" />
                    </Form.Group>
                    <Form.Group as={Col} md={5}>
                        <Form.Label style={{ fontWeight: "bold" }}>Price</Form.Label>
                        <Form.Control
                            type="text"
                            defaultValue={price}
                            {...register("price", { required: true })}
                            placeholder="Price" />
                    </Form.Group>
                    <Form.Group as={Col} md={7}>
                        <Form.Label style={{ fontWeight: "bold" }}>Description</Form.Label>
                        <Form.Control
                            style={{ height: "10rem" }}
                            type="text"
                            defaultValue={description}
                            as="textarea"
                            {...register("description", { required: true })}
                            placeholder="Description" />
                    </Form.Group>
                    <Col md={5}>
                        <Form.Label style={{ fontWeight: "bold", display: "block"}}>{edit ? "Change Image": "Add Image"}</Form.Label>
                        <Button
                            as={"label"}
                            htmlFor="upload"
                            className="d-block p-2 uploadBtn">
                            {/* <FontAwesomeIcon icon={faCloudUploadAlt} className="mr-2" /> */}
                            Upload Image
                        </Button>
                        <Form.Control
                            hidden="hidden"
                            id="upload"
                            type="file"
                            onChange={handleImgUpload}
                        />
                    </Col>
                </Row>
                <div className="text-center mt-3">
                    <Button type="submit" className="mainBtn" disabled={isDisabled}>{edit? 'Update':'Submit'}</Button>
                </div>
            </Form>
        </div>
    );
};

export default AddService;