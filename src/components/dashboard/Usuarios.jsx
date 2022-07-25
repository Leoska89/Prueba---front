import React,{ useEffect } from 'react'
import { Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getUsuariosAction } from '../../actions/dashboardActions'
import Usuario from './Usuario'
import './dashboard.styles.scss'

//redux
import { useDispatch,useSelector } from 'react-redux';



const Usuarios = () => {

    const dispatch = useDispatch();
    const usuarios = useSelector(state => state.dash.usuarios);
    const loadUsuarios = useSelector(state => state.dash.loadUsuarios);

    useEffect(() => {
        
        dispatch(getUsuariosAction()); 
    }, [])

    return ( 
        <div className='usuarios'>
            <div className='dasboard-header row head-usuario'>
                <h2 className='icon-noticia'><FontAwesomeIcon icon="newspaper" /></h2>
                <h3>Usuarios</h3>
            </div>
            <div className="noticias-iconos row m-0 ">
                <div className="col-1 iconos-noticias p-0 justify-content-cente"/>
                <div className="col-11 p-0">
                    {loadUsuarios
                        ?   <div className='row justify-content-center align-items-center'>                                
                                <Spinner className='mt-5' size="lg" animation="border" role="status">
                                </Spinner>
                            </div>  
                        :                      
                        <div className="noticia pl-4 pt-3">
                            <h4>{noticiasTotal} Resultados relacionados</h4>
                            <hr />
                            <div className='pr-3'>
                                {usuarios.map((usuario,index) => (
                                    <Usuario 
                                        key={index}
                                        usuario={usuario}
                                    />
                                ))}                            
                            </div>
                        </div> 
                    }
                </div>
            </div>
        </div> 
     );
}
 
export default Usuarios;