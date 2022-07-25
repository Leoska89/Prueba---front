import React,{ useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch,useSelector } from 'react-redux';

const Usuario = ({usuario}) => {

    //destructuring    
    const { id,name,email} = usuario;
    //redux
    const dispatch = useDispatch();


    return ( 
        <>
            <div className="row">
                <div className="col-8">
                    <h4><strong>{title}</strong></h4>
                    <p>{description.substring(0,140)}...</p>
                </div>
                <div className="col-4 ">
                    <img class="img-fluid mt-3" src={urlToImage} alt=""/>
                </div>
            </div>

           <div className='row'>
            <div className='col-md-3'>
                {id}
            </div>
            <div className='col-md-3'>
                {name}
            </div>
            <div className='col-md-3'>
                {email}
            </div>
            <div className='col-md-3'>
                block
            </div>            
       
           </div>
        </>
     );
}
 
export default Usuario;