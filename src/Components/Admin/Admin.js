import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddProducts from '../AddProducts/AddProducts';
import EditProducts from '../EditProducts/EditProducts';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import EditIcon from '@material-ui/icons/Edit';
// import ManageProducts from '../ManageProducts/ManageProducts'
import './Admin.css'

const Admin = () => {
const [addproduct,setAddProduct] = useState(false);
const toggleClass = () => {
    setAddProduct(!addproduct);
  };

    return (
        <div className="container  mt-2">
            <div className="row">
                <div className="col-md-4 bg-dark text-white text-center mainContainer">
                    <h2>Fresh Foods</h2>
                    <button className="pt-3 pb-3 d-block addButtoncontrol w-75 text-center  "><EditIcon />
                        <Link onClick={toggleClass} className="addButtoncontrolA" > Manage Products</Link>
                   </button> 
                
                    <button className="pt-3 pb-3 d-block addButtoncontrol w-75  text-center  "> <AddToPhotosIcon />
                    <Link onClick={toggleClass} className="addButtoncontrolA" > Add Products</Link>
                    </button>
                    <h4  className="pt-3 pb-3  "> <CalendarViewDayIcon />
                    <Link className="addButtoncontrolA">Edit Products</Link>
                    </h4>
                    
                    
                    
                    
                </div>
                <div className="col-md-8">
                    {/* <ManageProducts /> */}
                    {
                    
                    (addproduct === false) ?  <AddProducts /> : <EditProducts /> 
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Admin;