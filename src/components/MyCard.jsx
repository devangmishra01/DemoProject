import React,{useState} from 'react'
import Details from './Details';
const getUrl=(poster_path)=>{
  return `https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`
}
const MyCard = (props) => {
  
   const [showdetails,setShowdetails]=useState(false);
   const getdetails=()=>{
   setShowdetails(true);
  //  console.log("clicked")
  }
  
  return (
<>
    {
      showdetails&&(<Details info={props.element} showdetails={()=>setShowdetails(false)}/>)
    }
   <div className="card d-flex flex-column m-1 p-1" style={{width:'12rem'}}>
    <a onClick={getdetails}  className='btn btn-fix'>

   
    <img src={getUrl(props.element.poster_path)} className="card-img-top" alt="image"/>
    <div className="card-body">
      <p className="card-text">{props.element.original_title}</p>
    </div>
    </a>
  </div>
 
  </>
  )
}

export default MyCard