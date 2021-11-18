import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import swal from 'sweetalert';
import { UserContext } from '../../../../App';
import './BookList.css'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import ListSkeleton from '../../../Shared/TableOrder/ListSkeleton';

const BookList = () => {
    const { user } = useContext(UserContext);
    const [bookings, setBookings] = useState([]);
    const [isUpdated, setIsUpdated] = useState(false);

    useEffect(() => {
        axios.get(`https://immense-river-40491.herokuapp.com/bookingList?email=${user.email}`)
        .then(res => setBookings(res.data))
    },[user.email, isUpdated])

    const handleDelete = (id, status) => {
        setIsUpdated(false)
        swal({
            title: `${status === 'Done' ? "Remove" : "Cancel"} Booking?`,
            text: `Are you sure! you want to ${status === 'Done' ? "remove booking from your booking List" : "cancel"}?`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then( wantDelete => {
            if (wantDelete) {
                const loading = toast.loading('deleting...Please wait!')
                axios.delete(`https://immense-river-40491.herokuapp.com/deleteOrder/${id}`)
                .then(res => {
                    toast.dismiss(loading)
                    if(res){
                        setIsUpdated(true);
                        toast.success('Your Booking is successfully canceled!');
                    }
                    else{
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
            {bookings.length === 0 && <ListSkeleton/>}
            <div className="row px-3">
                {
                    bookings.map(({_id, serviceName,status,description,img}) => {
                        return(<div className="col-md-4" key={_id}>
                            <div className="bookingList">
                                <div className="d-flex justify-content-between">
                                    <img src={img} alt=""/>
                                    <div>
                                        <p className="serviceState" style={{color: '#fff', background: status === 'Pending' ? 'rgb(255 78 96)' : status === 'On going' ? 'rgb(73 146 255)' :'rgb(31 204 123)'}}>{status}</p>
                                    </div>
                                </div>
                                <h6>{serviceName}</h6>
                                <p>{description}</p>
                                <Button variant="outline-danger" onClick={() => handleDelete(_id, status)}> 
                                    <FontAwesomeIcon icon={faTimesCircle}/>
                                     { status === 'Done' ? 'Remove':'Cancel'}
                                </Button>
                            </div>
                        </div>)
                    })
                }
            </div>
        </div>
    );
};

export default BookList;