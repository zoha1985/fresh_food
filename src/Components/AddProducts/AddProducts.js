import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";


const AddProducts = () => {
    const [imageUrl, setImageUrl] = useState()
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        const eventData = {
            name: data.name,
            imageUrl: imageUrl,
            price: data.price,
            quantity: data.quantity
        };
        console.log(eventData)
        const url = `https://sheltered-forest-82274.herokuapp.com/addProduct`
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(eventData)
        })
            .then(data => console.log(data))


        console.log('Total event desc', eventData);
    }


    const handleImage = event => {

        // console.log(event.target.files[0])
        const imgData = new FormData();
        imgData.set('key', '1334eaeff466e465b540c20d7172b6a5');
        imgData.append('image', event.target.files[0]);

        axios.post("https://api.imgbb.com/1/upload",
            imgData)
            .then(function (response) {
                setImageUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }



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

    return (

        <div className="container pt-5 ">
            <div className="row">
                <div className="col-md-12 w-100">

                    <h4 className="text-center bg-dark p-3 text-white" >Add Product</h4>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="w-75 p-2 m-2" name="name"  placeholder="product name" ref={register} required /> <br />
                        <input className="w-75 p-2 m-2" name="price"  placeholder="price" ref={register}  required /> <br />
                        <input className="w-75 p-2 m-2" name="quantity"  placeholder="quantity" ref={register}  required /> <br />
                        <input className="w-75 p-2 m-2" name="exampleRequired" type="file" onChange={handleImage}  required />
                        <input type="submit" />
                    </form>
                    
                

                </div>
            </div>
        </div>

    );
};

export default AddProducts;