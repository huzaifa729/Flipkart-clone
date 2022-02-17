// import logo from './logo.svg';
import Slider from './Slider';
import './App.css';
import Header from './Header';
import Header2 from './Header2';
import Auto from './Auto';
import Auto2 from './Auto2';
import Auto3 from './Auto3';
import Auto4 from './Auto4';
import Footer from './Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route
 
} from "react-router-dom";

import MenFootwear from './MenFootwear';
import Login from './Login';
import Fotrs from './Fotrs';
  import Take from './Take';
// import Slidese from './Slidese';
import FlipkartShoping from './FlipkartShoping';
import Checkout from './Checkout';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import {loadStripe} from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe("pk_test_51KJFGGSGtv46Bfi1hBljdoSq8Kk1qdWlTh8YkLD4BtrICG2fBbej5eY7X9JChCX904FfJKijj39ZpFIKWyujkZER00WtQ42E8j")



function App() {
  const [{}, dispatch]  = useStateValue(); 

   useEffect(()=>{
      //will only run once when app component is loaded.
      auth.onAuthStateChanged(
        authUser => {
          console.log('the user is', authUser);
       
        if(authUser){
            //user just logged in / user was logged in
            dispatch({
                type: 'SET_USER',
                user: authUser
            })
        }
         else{
               // user logged out
               dispatch({
                type: 'SET_USER',
                user: null
               })
         }

        })
   }, [])

  return (
    <Router>
    <div className="App">
    <Switch>
    <Route path="/menfootwear">
      <Header/> 
     <MenFootwear/>
     <Take/>  
 {/* <Slidese/> */}
 
 </Route>

     <Route path="/login">
     <Header/> 
      <MenFootwear/> 
     <Login/> 
     <Fotrs/>
     </Route>


     <Route path="/flipkartshoping">
     <Header/> 
     <MenFootwear/> 
     <FlipkartShoping/> 
   </Route>

   <Route path="/checkout">
      <Header/> 
      <MenFootwear/>  
      <Checkout/>
   </Route>

   <Route path="/payment">
      <Header/> 
      <Elements stripe = {promise} > 
      <Payment/>
    </Elements>
</Route>

   <Route path="/">
     <Header/>
     <Header2/>
     <Slider/>
     <Auto/>
     <Auto2/>
     <Auto3/>
     <Auto4/>
     <Footer/>
     </Route>
    </Switch>
</div>
</Router>
  );
}

export default App;
