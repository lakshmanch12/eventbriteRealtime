
// import './App.css';
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Demo from "./Pages/Demo";
import Register from "./Pages/Register";
import Event from "./Pages/Event";
import Findevent from "./Pages/Findevent";
import Catgeory from "./Pages/Catgeory";
import Pricing from "./Pages/Pricing";
import Sales from "./Pages/Sales";
import Sub from "./Pages/Sub";
import Seemore from "./Pages/Seemore";
import Lakshman from "./Pages/Lakshman";
import {ThemeProvider} from "@material-ui/core";
import theme from './Pages/Theme';
import { Routes,Route } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useEffect ,Navigate} from "react";
import {loginSuccess} from "../src/redux/actions/userActions";
function App() {
  const dispatch=useDispatch();
  useEffect(()=>{
     
    let user = localStorage.getItem("acesstoken")
  
    console.log("user--------------------------",user)
    if (user){
      
      dispatch(loginSuccess(user));
     
      console.log("user--------------------------",user)
    }
    console.log("user--------------------------",user)
  },[]);
 
  return (
    <div className="App">
      
      <Routes>
      <Route path="/"   element={ <Home/> }/>
      <Route path="Demo"  exact element={ <Demo/> } />
      <Route path="login"  exact element={ <Login/> } />
      <Route path="register"  exact element={ <Register/> } />
      <Route path="sub"  exact element={ <Sub/> } />
      <Route path="seemore"  exact element={ <Seemore/> } />
      <Route path="catgeory"  exact element={ <Catgeory/> } />
      <Route path="event"  exact element={ <Event/> } />
      <Route path="findevent"  exact element={ <Findevent/> } />
      <Route path="Pricing"  exact element={ <Pricing/> } />
      <Route path="Sales"  exact element={ <Sales/> } />
      <Route path="lakshman"  exact element={ <Lakshman/> } />
      </Routes>
   
      
    </div>
  );
}

export default App;
