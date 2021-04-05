import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './SingleProduct.css'

const SingleProduct = ({ newItem }) => {

    const [logedinUser, setLogedinUser] = useContext(UserContext);

    console.log('single loged in user', logedinUser)
    const handleSingleProduct = () => {

        console.log('single product new items', newItem)
        if (logedinUser.email === true) {
            const data = { ...newItem, email: logedinUser.email }
            const url = `https://sheltered-forest-82274.herokuapp.com/addOrder`
            fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => console.log(data))
            // console.log(data)
        } else {
            alert('You have to login first !')
        }
    }




    return (
     
            <div className="container">
        
            <div className="col-md-12 col-sm-12 w-100">
            <div class="card cardControl" >
                <img src={newItem.imageUrl} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{newItem.name}</h5>
                    <div>
                      <span className="card-text">$ {newItem.price}</span>
                        <Link to="/neworder"><button onClick={handleSingleProduct} className="btn btn-primary">By Now</button></Link>

                            </div>
                </div>
         
        </div>
        </div>
    </div>
        
     

        //   <div className="container mt-5">
        //         <div className="row d-inline  controlColum">
        //                      <div className="col-md-12 col-sm-12 colum">
        //                          <div className="cardContri">
        //                               <img className="w-100 " src={newItem.imageUrl} />
        //                             <div >
        //                                 <h5 className="card-title">{newItem.name}</h5>
        //                                 <div>
        //                                     <span className="card-text">$ {newItem.price}</span>
        //                                    <Link to="/neworder"><button onClick={handleSingleProduct} className="btn btn-primary">By Now</button></Link>

        //                             </div>
        //                         </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
    );
};

export default SingleProduct;