import React from 'react';
import { Dropdown } from 'react-bootstrap';
import './Order.css'

const Order = ({order, handleAction}) => {
    const {_id, name, email, serviceName, status} = order;
    const setBackground = {
        color: '#FFFFFF',
        background: status === 'Pending' ? 'rgb(255 78 96)' : status === 'On going' ? 'rgb(73 146 255)' :'rgb(31 204 123)'
    }
    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{serviceName}</td>
            <td>
                <Dropdown class="statusBtn" id="dropdown-basic-button">
                    <Dropdown.Toggle style={setBackground}>
                        {status}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => handleAction(_id, "Pending")} id="pending">Pending</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleAction(_id, "On going")} id="ongoing">On going</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleAction(_id, "Done")} id="done">Done</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </td>
        </tr>
    
    );
};

export default Order;