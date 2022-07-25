import {
    GET_USUARIOS,
    LOADING_USUARIOS,
} from '../types';


import clienteAxios from '../components/config/axios';

//funcion para traer los usuarios del backend
export function getUsuariosAction(){    
    return async(dispatch) => {
        dispatch(loadUsuarios(true));
        try {
            const ans = await clienteAxios.get('usuarios');
            
            dispatch(getUsuarios(ans.data.items))
            dispatch(loadUsuarios(false));
        } catch (error) {
            dispatch(loadUsuarios(false));

        }
    }
}

const getUsuarios = usuarios => ({
    type:GET_USUARIOS,
    payload:usuarios
});

const loadUsuarios = load => ({
    type:LOADING_USUARIOS,
    payload:load
});
