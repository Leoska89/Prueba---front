import React,{useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { loginTokenAction } from '../../actions/authActions'


const CargarDatos = () => {

    //redux
    const dispatch = useDispatch();
    const token = localStorage.getItem('token');
    useEffect(() => {
        
        dispatch(loginTokenAction()); 
      
    },[token]);

    return ( 
        <>

        </>
     );
}
 
export default CargarDatos;