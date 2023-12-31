
import './App.css';
import React,{useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

 const App =()=> {
  const apiKey=process.env.REACT_APP_NEWS_API;
  const pageSize=7;

  
  const[progress,setProgress]=useState(0);
 
 
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            height={4}
            color='#f11946'
            progress={progress}

          />
          <Routes>
            {/* without unique  apiKey={apiKey} key in each route it will not rerender on clicking on link like general or 
            so after providing  apiKey={apiKey} key prop in each route it will work  */}
            <Route exact path='/' element={<News setProgress={setProgress}  apiKey={apiKey} key={""} pageSize={9} country="in" category="" />} />
            <Route exact path='/general' element={<News setProgress={setProgress}  apiKey={apiKey} key="general" pageSize={9} country="in" category="general" />} />
            <Route exact path='/business' element={<News setProgress={setProgress}  apiKey={apiKey} key="business" pageSize={9} country="in" category="business" />} />
            <Route exact path='/sports' element={<News setProgress={setProgress}  apiKey={apiKey} key="sports" pageSize={9} country="in" category="sports" />} />
            <Route exact path='/technology' element={<News setProgress={setProgress}  apiKey={apiKey} key="technology" pageSize={9} country="in" category="technology" />} />
            <Route exact path='/science' element={<News setProgress={setProgress}  apiKey={apiKey} key="science" pageSize={9} country="in" category="science" />} />
            <Route exact path='/health' element={<News setProgress={setProgress}  apiKey={apiKey} key="health" pageSize={9} country="in" category="health" />} />
            <Route exact path='/entertainment' element={<News setProgress={setProgress}  apiKey={apiKey} key="entertainment" pageSize={9} country="in" category="entertainment" />} />

          </Routes>
        </Router>

      </div>
    )
  }


export default App;