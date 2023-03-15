
// import './App.css';
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Catgeory from "./Pages/Catgeory";
import Sub from "./Pages/Sub";
import {ThemeProvider} from "@material-ui/core";
import theme from './Pages/Theme';
import { Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
       <ThemeProvider theme={theme}>
              {/* <Header/> */}
             
             {/* <Navbar/> */}
             </ThemeProvider>
      
      {/* <Login/> */}
      <Routes>
      <Route path="/" element={ <Home/> }/>
      <Route path="login"  exact element={ <Login/> } />
      <Route path="register"  exact element={ <Register/> } />
      <Route path="sub"  exact element={ <Sub/> } />
      <Route path="catgeory"  exact element={ <Catgeory/> } />
      </Routes>
    </div>
  );
}

export default App;
