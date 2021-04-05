import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import SingleProduct from '../SingleProduct/SingleProduct'
import { Link } from 'react-router-dom';
import { LinearProgress } from '@material-ui/core';


const Home = () => {
    const [newItem, setNewItem] = useState([]);
    console.log('new iream result', newItem)
    useEffect(() => {
        fetch('https://sheltered-forest-82274.herokuapp.com/addNewProduct')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setNewItem(data);
            })
    }, [])

    return (
        <div className="container">
            <div className="row pt-2">
                <div className="col-md-6">
                    <h3>Freash Foods</h3>
                </div>
                <div className="col-md-6 controlNavLeft">
                    <ul>

                        <Link to="/home">Home</Link>
                        <Link to="/neworder">NewOrder</Link>
                        <Link to="/admin">Admin</Link>
                        <Link to="/deals">Deals</Link>
                        {/* <Link to="/neworder">NewOrder</Link> */}
                        
                        <Link className="customeCode text-white" to="/login">Login</Link>
                    </ul>
                </div>
              
            </div>
            
            <div className="row text-center pt-3">
                    <div className="col-md-12">
                    <input className="w-50 p2" type="search" name="" id=""/><button className="bg-primary ">Search</button>
                    </div>
                </div>
                {
                    newItem.length === 0 && <LinearProgress />
                }
             
            {
              newItem.map (newItem => <SingleProduct key={newItem._id} newItem={newItem} ></SingleProduct>) 
            }


        </div>
    );
};

export default Home;