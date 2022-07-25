import React,{ useEffect } from 'react'
import Header from './Header';  

//redux
import { useSelector,useDispatch } from 'react-redux'

const Dashboard = ({history}) => {

    const dispatch = useDispatch();

    //protege vista
    const token = useSelector(state => state.auth.token);
    const perfil = useSelector(state => state.auth.perfil);
    const recarga = useSelector(state => state.auth.recarga);
    const autenticado = useSelector(state => state.auth.autenticado);

    useEffect(() => {
        if(!autenticado && !recarga){
            history.push('/login');
        }
        else if(perfil === 0 && !recarga){
            history.push('/crear_perfil') 
        }else{
            dispatch(getMegustaAction());
        }
    },[autenticado,recarga]);

    
    return ( 
        <>  
            <div className="dashboard">
                <Header />
                <div className="container">
                    <Busqueda />
                    <div className="row mx-0 ">
                        <div className="col-8 mt-3 pr-5 pl-0">
                            <Usuarios/>
                        </div>
                      
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Dashboard;