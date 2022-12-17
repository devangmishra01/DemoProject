import React from 'react'
const getUrl = (poster_path) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`
}
const Details = (props) => {
    console.log(props.info)
    const mystyle = {
        fontSize: '',
        fontWeight: 'bold',
    }
    const imageStyle = {
        height: '389px',
        width: '266px',
        left: '458px',
        top: '389px',
        borderRadius: '0px',

    }
    return (
        <>

            {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Launch static backdrop modal
</button> */}

            <div className="modal show fade " style={{
                display: 'block', backgroundColor: 'rgba(0,0,0,0.8)'
            }}>
                <div className="modal-dialog modal-dialog-centered "style={{height: '474px',
                width: '583px',
                borderRadius: '0px'}}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className='bold'>{props.info.original_title}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={props.showdetails}></button>
                        </div>
                        <div className="modal-body">
                            <div className="d-flex " >
                                <div className="p-2">
                                    <img src={getUrl(props.info.backdrop_path)} style={imageStyle} alt="image" srcset="" />
                                </div>
                                <div className="p-2">
                                    <div className="date">
                                        <p><span style={mystyle}>Release date:</span>{props.info.release_date}</p>
                                    </div>
                                    <div className="movieDetails">
                                        <p>{props.info.overview}</p>
                                    </div>
                                    <div className="rating">
                                        <p><span style={mystyle}>{props.info.vote_average}</span>/10({props.info.vote_count} total votes)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Details