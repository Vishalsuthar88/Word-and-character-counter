import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';
import Alert from './components/Alert';
import About from './components/About'
import {BrowserRouter, Routes, Route } from 'react-router-dom';
// import Textform from './components/childComp';
// import ParentComp from './components/parentComp';

function App() {
  
  const [mode, setMode]=useState('light')
  const [check, setCheck] = useState(true)
  const [theme, setTheme] = useState(null)
  const [alert, setAlert] = useState(null)
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-danger','bg-success','bg-warning','bg-#00244a','bg-white')
  }
  
  const togglemode=(cls)=>{
    removeBodyClasses();
    // console.log(cls)
    if(cls==='danger' || cls==='warning' || cls==='success' || cls==='white'){
    document.body.classList.add('bg-'+cls)
    showAlert("Theme Changed!","success")
    setCheck(true)
    setTheme(cls)
    }
    else if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#00244a'
      showAlert("Dark mode has been enabled!","success")
      // document.title="TextEditor- DarkMode"
      setCheck(false)
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled!","success")
      // document.title="TextEditor- Home"
      setCheck(false)

    }
  }
  return (
    
    
    <BrowserRouter>
    <div className="App">

      {/* Tips and information given by sir on last day  */}


      {/* private routes in react
      learn js . org
      obsidian software
      CRUD operation in MERN
      subabase
      vite app better than create react
      next js better than react ,react web can not be ranked in google
      mongodb
      https://www.learn-js.org/
https://www.youtube.com/watch?v=enOsPhp2Z6Q
https://www.makeuseof.com/create-protected-route-in-react/


- [x] Make the private route in react
- [ ] use the login to login a user using the json data 
- [ ] show the user profile page , else please login to continue 
- [x] https://www.learn-js.org/
- [x] Tell about the what to do after this -> start with CRUD operation in MERN (https://www.youtube.com/watch?v=enOsPhp2Z6Q
- [x] https://www.makeuseof.com/create-protected-route-in-react/
      use this more ->https://sharemytext.web.app/
- [x] Use the Linked In Post the apps you make screen shots  , deploy links for use , post ,  comments just use it 
- [ ] 
- [x] My Podcast , and upcoming one also 😉
- [x] Start learn about React more app , Mongo Db setup , express , 
- [x] then , Use somethings like Supabase with react , Deploy on Firebase , etc 
- [x] How to make a react app using #Vite , 
- [x] Start learning about NEXT js (same hai react hi , it is framework)
- [x] You can learn about Sql Database like - > PostgreSQL 
- [ ]  */}

 





      {/* <ParentComp /> */}
      <Navbar title="TextEditor" abouttext="About Us" mode={mode} togglemode={togglemode} theme={theme} check={check}/>
      <Alert alert={alert}/>
      <div className="container" my-3>
      <Routes>
          <Route exact path="/about" element={<About />}>
          {/* <About/> */}
          </Route>
          <Route exact path="/" element={<Textbox title="Enter text below:" mode={mode} theme={theme} check={check} showAlert={showAlert} />}>
        {/* <Textbox title="Enter text below:" mode={mode} showAlert={showAlert}/> */}
          </Route>
        </Routes>
      </div>
    </div>
    </BrowserRouter>

    
    
  )
}

export default App;
