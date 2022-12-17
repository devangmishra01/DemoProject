import React,{useEffect,useState} from 'react'
import MyCard from './MyCard';
import axios from  'axios';

const Movie = (props) => {
    const[data,setData]=useState([]);
    const[error,setError]=useState(null);
    const[loading,setLoading]=useState(true);
  
   
    //https://api.themoviedb.org/3/search/movie?query=the&api_key=f9dae02c183e25e6b4475214fc3fd209

//api-link=https://api.themoviedb.org/3/movie/popular?api_key=f9dae02c183e25e6b4475214fc3fd209&language=en-US&page=1
    useEffect(() => {
       ( props.query!==""?(
        axios.get(`https://api.themoviedb.org/3/search/movie?query=${props.query}&api_key=f9dae02c183e25e6b4475214fc3fd209&language=en-US&page=1`)
        ): axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=f9dae02c183e25e6b4475214fc3fd209&language=en-US&page=1`)).then((response) => {
            setData(response.data.results);
          })
          .catch((err) => {
            setError(err.message);
            setData(null);
          })
          .finally(() => {
            setLoading(false);
          });
      }, [props.query]);
      console.log(error);
      console.log(loading);
    console.log(data);
  return (
    <div className='container mt-4'>
         <h1>MOST RECENT MOVIES</h1>
        <div className='row'>
        {data.map((element)=>(
            
        <MyCard element={element} key={element.id}/>
       
        ))}
        </div>
    </div>
  )
}

export default Movie