import {
    GET_USUARIOS,
    LOADING_USUARIOS
} from '../types';

//state
const initialState = {
    usuarios:[],
    loadUsuarios:false
}

export default function(state = initialState, action){
    switch(action.type){

        case GET_USUARIOS:
            return{
                ...state,
                usuarios:action.payload,
            }

        case LOADING_USUARIOS:
            return{
                ...state,
                loadUsuarios:action.payload,
            }

        default:
            return state;
    }
}