import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Table, Button } from 'react-bootstrap';
import toast from 'react-hot-toast';
import swal from 'sweetalert';
import { UserContext } from '../../../App';
import TableLoader from '../../Shared/TableOrder/TableOrder';
import AddService from '../AddService/AddService';

const ManageServices = () => {
    const {user : { email }} = useContext(UserContext)
    const [services, setServices] = useState([])
    const [isUpdated, setIsUpdated] = useState(false)
    const [edit, setEdit] = useState(null);

    useEffect(() => {
        axios.get('https://immense-river-40491.herokuapp.com/services')
        .then(res => {
            setServices(res.data);
            setIsUpdated(false)
        })
    }, [isUpdated, edit])
    
    const checkPermission = (id, action) => {
        const getMainServices = services.slice(0, 6)
        const getService = getMainServices.find(({_id}) => id === _id)
        
        if(getService && email === "test@admin.com"){
            swal("Permission restriction!","As a test admin, you can't edit or delete the main six services. You can only edit or delete your added services", "info" )
        } else {
            if(action === 'edit'){
                setEdit(id)
            } else {
                handleDelete(id)
            }
        }
    }

    const handleDelete = (id) => {
        setIsUpdated(false)
        swal({
            title: "Are you sure?",
            text: "Are you sure! you want to delete this service?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then( wantDelete => {
            if (wantDelete) {
                const loading = toast.loading('deleting...Please wait!')
                axios.delete(`https://immense-river-40491.herokuapp.com/delete/${id}`)
                .then(res => {
                    toast.dismiss(loading)
                    if(res){
                        setIsUpdated(true);
                        toast.success('Service has been deleted successfully!');
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
          })
    }

    return (
        <>
        { edit ? 
            <AddService edit={edit} setEdit={setEdit} services={services}/> 
            : 
            services.length === 0 ?
            <TableLoader/>
            :
           <div className="orderList">
                <Table hover width="100%">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            services.map(({_id, name, price, description}) => {
                                let des = description
                                // let shortDes = des.split(' ').slice(0,5).join(' ')
                                return(
                                    <tr>
                                        <td>{name}</td>
                                        <td>{des ? des : "Nothing"}</td>
                                        <td>${price}</td>
                                        <td>
                                            <Button variant="outline-success" onClick={() => checkPermission(_id, 'edit')}> 
                                            <FontAwesomeIcon icon={faEdit}/>
                                             Edit</Button>
                                            <Button className="ml-2" variant="outline-danger" onClick={() => checkPermission(_id, 'delete')}> 
                                            <FontAwesomeIcon icon={faTrashAlt}/>
                                             Delete</Button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
        }
        </>
    );
};

export default ManageServices;