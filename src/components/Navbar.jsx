import React,{useState} from 'react'
import image from '../image/1.png';

const Navbar = (props) => {
    const logoStyle = {
        height: '54px',
        width: '156px',
        left: '121px',
        top: '11px',
        borderRadius: '10px'

    }
    
    
    return (
        <div >
        <nav className="navbar bg-white" style={{height:'60px'}}>
            <div className="container-fluid">
                <a className="navbar-brand "><img src={image} alt="image" srcset="" style={logoStyle} /></a>
                <form className="form-search form-inline">
                    <input type="text" className="search-query "  onChange={(e)=>props.setQuery(e.target.value)} placeholder="Search for a movie" />
                </form>
            </div>
        </nav>
        <hr style={{color:'black'}}/>
       
        </div>
    )
}

export default Navbar