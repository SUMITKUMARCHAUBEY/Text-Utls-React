
import { useState } from 'react';
import './App.css';
import Alert from './COMPONENTS/Alert';
// import About from './COMPONENTS/About';
import Navbar from './COMPONENTS/Navbar';
import TextForm from './COMPONENTS/TextForm';

// import { BrowserRouter as Router, 
//   Route,
//   Routes,
  
 
// } from 'react-router-dom';
// import Home from './COMPONENTS/Home';



function App() {
const [mode,setmode]=useState('light');
// const [tgbgmode,settgbgmode]=useState('dark');

const [alert,setalert]=useState(null);
 

const showAlert=(message,type)=>{
    setalert({msg:message,type:type})

    setTimeout(()=>{
      setalert(null);
    },1500)
  }



const tgmode=()=>{
  if(mode==='light'){
  setmode('dark')
  document.body.style.backgroundColor='#042743';
  showAlert('Dark Mode Enabled','success');
  document.title="Text Utils-Dark";
  // document.body.style.color='white';
    
    // setInterval(() => {
    //   document.title="install text utils now";
    // }, 2000);
    // setInterval(() => {
    //   document.title="win!! win!! win!!"
    // }, 3000);

    
  // settgbgmode('light')
}
else{
  setmode('light');
  document.body.style.backgroundColor='white';
  showAlert('Light Mode Enabled','success');
  document.title="Text Utils-Light";
  // document.body.style.color='black';
  // docuLight.body.style.color='white';
    // settgbgmode('dark');
  }
  
}

  return (
  <>
  <Navbar Mode={mode} toggle={tgmode} />
  <Alert alert={alert}/>
  <TextForm heading="Enter the text to analyse" Mode={mode} showalert={showAlert}/>
  {/* <Router> */}
{/* <Navbar title="Text Utils" aboutus="About Textutils"/> */}
    {/* 
      <Routes>
          <Route path="/" element={<TextForm heading="Enter the text to analyse" Mode={mode} showalert={showAlert}/>}/>
          <Route path="/about" element= {<About/>}/>
      </Routes>
      </Router> */}
  </>
  );
}

export default App;
