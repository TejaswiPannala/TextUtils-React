import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import About from "./Components/About";
import "./App.css";
import React, {useState} from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert]=useState(null);
  const showAlert=(message, type)=> {
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(()=> {
        setAlert(null);
      },1500);
  }
  const toggleMode=()=> {
    if(mode==='light') {
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode has been Enabled","success");
      document.title='TextUtils - Dark Mode';
    } else {
        setMode('light');
        document.body.style.backgroundColor='white';
        showAlert("Light Mode has been Enabled","success");
        document.title='TextUtils - Light Mode';
      }  
  }
  
  return (
    <>
    <BrowserRouter>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
    {/* /users --> Component 1
        /users/home --> Component 2   */}
        <Route exact path="/about" element={<About />} />
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>} />
    </Routes>
    {/* <About/> */}
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;


