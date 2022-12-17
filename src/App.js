import './App.css';
// import MyCard from './components/MyCard';
import React,{useState} from 'react';
import Navbar from './components/Navbar';
import Movie from './components/Movie';

function App() {
  const [query,setQuery]=useState("");
    // if(query=="")
    //  setQuery("%27%27")
  return (
    <div className="">
    <Navbar query={query} setQuery={setQuery}/>
    <Movie query={query}/>

    <div className="pb-4 text-center">
      <hr/>
  <div className="card-body">
    <p className="card-text">Copyright&#9400;All right reserved.2022 <br/>Made by: <span style={{fontWeight:'bold'}}>Devang Mishra</span> </p>
   
  </div>
</div>
    </div>
  );
}

export default App;
