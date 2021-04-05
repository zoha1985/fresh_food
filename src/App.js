import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home'
import Card from './Components/Card/Card';
import Login from './Components/Login/Login';
import firebase from "firebase/app";
import firebaseConfig from './Components/Card/Config';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
// import Order from './Components/Order/Order';
import Admin from './Components/Admin/Admin';
import EditProducts from './Components/EditProducts/EditProducts';
import AddProducts from './Components/AddProducts/AddProducts';
import NewOrder from './Components/NewOrder/NewOrder';
// import EditProducts from './Components/EditProducts/EditProducts';
// import Orders from './Components/Orders/Orders'
// import ManageProducts from './Components/ManageProducts/ManageProducts';
// import NewProduct from './Components/NewProduct/NewProduct';
// import ImgPage from './Components/ImgPage/ImgPage';

 export const UserContext = createContext();

firebase.initializeApp(firebaseConfig);



function App() {
  const [logededInUser, setLogededInUser] = useState({});
  console.log('logededInUser',logededInUser)
  return (
    
<UserContext.Provider value={[logededInUser, setLogededInUser]}>

      {/* <Home />
      <Card />
      <Login /> */}


      <Router>
        <Switch>

          <Route exact path="/home">
            <Home></Home>
          </Route>
       
          {/* <Route path="/card">
            <Card />
          </Route> */}
        
          {/* <PrivateRoute path="/order">
            <Order/>
          </PrivateRoute> */}
          <PrivateRoute path="/admin">
            <Admin/>
          </PrivateRoute>

          <PrivateRoute path="/addproducts">
            <AddProducts />
          </PrivateRoute>
        
         <PrivateRoute path ="/neworder">
           <NewOrder />
         </PrivateRoute>
         <Route path="/login">
            <Login />
          </Route>
          
        
        <PrivateRoute path="/editproduct">
          <EditProducts />
        </PrivateRoute>

            {/* <ManageProducts />
            <AddProducts />
            <EditProducts /> */}
         
          
         
          {/* <Route path="/blog">
            <Blog />
          </Route>
          <PrivateRoute path="/booking">
              <Booking></Booking>
          </PrivateRoute> */}
      

          <Route exact path="/">
            <Home />
          </Route>

        </Switch>
    </Router>

      </UserContext.Provider>
  );
}

export default App;
