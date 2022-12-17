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
    </div>
  );
}

export default App;
