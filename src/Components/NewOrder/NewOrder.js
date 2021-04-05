import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './NewOrder.css';

const NewOrder = (props) => {
    console.log('neworders props', props)
    const [newOrder, setNewOrder] = useState([]);

    // const {name,price, quantity} = newOrder;
    const totalPrice = newOrder.reduce((total, prd)=>total + parseInt(prd.price),0)
    console.log('new order',newOrder)
    useEffect( () => {
        fetch('https://sheltered-forest-82274.herokuapp.com/newOrder')
        .then(res => res.json())
        .then(data => {
            console.log('result of data neworders',data)
            setNewOrder(data);
        })
    },[])

    const handleOrderProduct = () => {
        console.log('single order click')
    }
    const showSomething = () => {
        alert('Hellow sir What you want!')
    }
    return (
        <div>
            <h1 className="text-center pt-2 pb-2 text-white bg-dark p-3">Somethisg New Orders</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12">
                            <table>
                                        <tr>
                                                <th>Desctiption</th>
                                                <th> Quantity</th>
                                                <th>Price</th>
                                        </tr>
                            </table>
                        {
                            newOrder.map(newOrder => 
                                <table>
                                        <tr>
                                            <td>{newOrder.name}</td>
                                            <td>{newOrder.quantity='1'}</td>
                                            <td> {newOrder.price}</td>
                                        </tr>
                                    </table>
                                )
                        }
                            <table >
                                        <tr>
                                                <td>Total Products :{newOrder?.length} </td>
                                                <td>Quantity :{newOrder.length} </td>
                                                <td> Total $ :{totalPrice} </td>
                                                
                                        </tr>
                                     
                                    
                            </table>
                            <button onClick={() => showSomething()} className="float-right btn-primary p-2 mt-3"> Order Place</button>
                  
                    </div>
                </div>
            </div>
        
        </div>
    );
};

export default NewOrder;