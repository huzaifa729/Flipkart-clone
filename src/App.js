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






function App() {
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
