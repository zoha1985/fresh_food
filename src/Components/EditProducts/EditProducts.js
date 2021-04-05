
import { Table } from 'react-bootstrap';
import TableEdit from './TableEdit';
import React, { useEffect, useState } from 'react';

const EditProducts = () => {
    const [newItem, setNewItem] = useState([]);
    
    useEffect(() => {
        fetch('https://sheltered-forest-82274.herokuapp.com/addNewProduct')
            .then(res => res.json())
            .then(data => {
                setNewItem(data);
            })
    }, [newItem])
    return (

        <>  <h1> Manage Products</h1><br/>
            <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Product Price</th>
                    <th>Quantity</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    newItem.map(newItem => <TableEdit key={newItem._id} newItem={newItem}   /> )
                }
                    
            
               
            </tbody>
        </Table>

        </>
    );
};

export default EditProducts;