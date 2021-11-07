import React from 'react';
import { BrowserRouter,Switch ,Route} from 'react-router-dom';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Services from './Component/Services/Services';
import Register from './Component/Register/Register';
import PrivateRoute from './Component/PrivateRoute/Privateroute';
import Login from './Component/Login/Login';
import AuthProvider from './Component/Contex/AuthProvider';
import Footer from './Component/Footer/Footer';
import AddServices from './Component/AddServices/AddServices';
import Booking from './Component/Booking/Booking';
import Myorders from './Component/Myorders/Myorders';



const App = () => {
  return (
    <AuthProvider>
    <BrowserRouter>
         <Header></Header>
        <Switch>
            <Route exact path="/"> 
                <Home></Home>
            </Route>
            <Route exact path="/home"> 
                <Home></Home>
            </Route>
            <Route exact path="/services"> 
                <Services></Services>
            </Route>
            <Route exact path="/addservices"> 
                <AddServices></AddServices>
            </Route>
            <PrivateRoute exact path="/booking/:id"> 
                    <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute exact path="/myorder"> 
                <Myorders></Myorders>
            </PrivateRoute>
            <Route exact path="/login"> 
               <Login></Login>
            </Route>
            <Route exact path="/register"> 
               <Register></Register>
            </Route>
        </Switch>
        <Footer></Footer>
    </BrowserRouter>
    </AuthProvider>
  );
};

export default App;