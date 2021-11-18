import React, { useMemo } from 'react'
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement
} from '@stripe/react-stripe-js';
import swal from 'sweetalert';
import { Form, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';
import { UserContext } from '../../../../App';


const useOptions = () => {
  const options = useMemo(() => ({
    style: {
      base: {
        fontSize: "1.2rem",
        lineHeight: "2",
        color: "#495057",
        letterSpacing: "0.025em",
        "::placeholder": {
          color: "#aab7c4"
        }
      },
      invalid: {
        color: "#9e2146"
      }
    }
  }), []);
  return options;
};

const Checkout = () => {
  const { user, selectedService: { name, img, _id, description, price } } = useContext(UserContext);
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async data => {
    if (!stripe || !elements) {
      return;
    }
    const loading = toast.loading('Please wait...!');

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement)
    });

    if (error) {
      toast.dismiss(loading);
      return swal("Failed!", error.message, "error", { dangerMode: true });
    }
    else {
      const orderData = {
        ...data,
        paymentMethod: "card",
        paymentId: paymentMethod.id,
        status: "Pending",
        serviceId: _id,
        serviceName: name,
        description: description,
        img: img,
        price: price
      }
      axios.post('https://immense-river-40491.herokuapp.com/addOrder', orderData)
        .then(res => {
          toast.dismiss(loading);
          swal("Congratulation!", "Your order has been placed successfully", "success");
          reset();
        })
        .catch(err => {
          toast.dismiss(loading);
          swal("Failed!", "Something went wrong! please try again", "error")
        })
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <Col md={6} xs={12}>
          <Form.Group>
            <Form.Label style={{ fontWeight: "bold" }}>Your Name</Form.Label>
            <Form.Control
              type="text"
              defaultValue={user.name}
              {...register("name", { required: true })}
              placeholder="Your Name" />
          </Form.Group>

          <Form.Group>
            <Form.Label style={{ fontWeight: "bold" }}>Email</Form.Label>
            <Form.Control
              type="text"
              defaultValue={user.email}
              {...register("email", { required: true })}
              placeholder="Email Address" />
          </Form.Group>

          <Form.Group>
            <Form.Label style={{ fontWeight: "bold" }}>Address</Form.Label>
            <Form.Control
              type="text"
              {...register("address", { required: true })}
              placeholder="Address" />
          </Form.Group>
        </Col>
        <Col md={6} xs={12}>
          <div>
            <Form.Label style={{ fontWeight: "bold" }}>Card Number</Form.Label>
            <CardNumberElement className="form-control" options={options} />
          </div>
          <div className="mt-3">
            <Form.Label style={{ fontWeight: "bold" }}>Expiration Date</Form.Label>
            <CardExpiryElement className="form-control" options={options} />
          </div>
          <div className="mt-3">
            <Form.Label style={{ fontWeight: "bold" }}>CVC</Form.Label>
            <CardCvcElement className="form-control" options={options} />
          </div>
        </Col>
      </Row>
      <div className="text-center">
        <button className="mainBtn mt-4" type="submit" disabled={!stripe}>Pay Now</button>
      </div>
    </Form>
  );
};

export default Checkout;