import {useEffect, useReducer} from 'react';
import axios from 'axios';
const ACTIONS = {
    MAKE_REQUEST: 'make-request',
    GET_DATA: 'get-data',
    ERROR: 'error'
}
const BASE_URL = 'https://pixabay.com/api/?key=25103186-7ff47398d053bed25725fe25b'
function reducer(state, action){
    switch(action.type){
        case ACTIONS.MAKE_REQUEST: 
            return {gallerys: [], loading: true}
        case ACTIONS.GET_DATA:
            return {...state, gallerys: action.payload.gallery, loading: false}
        case ACTIONS.ERROR: 
            return {...state, gallerys: [], loading: false, error: action.payload.error}
        default: return state;
    }
}
function useFetchingGallery(params){
    const [state, dispatch] = useReducer(reducer, {gallerys: [], loading: true});
    useEffect(()=>{
        const cancelToken = axios.CancelToken.source();
        dispatch({type: ACTIONS.MAKE_REQUEST});
        axios.get(BASE_URL, {
            cancelToken: cancelToken.token,
            params: {
                ...params
            }
        }).then(res=>{
            dispatch({type: ACTIONS.GET_DATA, payload: {gallery: res.data.hits}});
            console.log(res.data);
        })
        .catch(err=>{
            if(axios.isCancel(err)) return
            dispatch({type: ACTIONS.ERROR, payload: {error: err}})
        });
        return ()=>{
            cancelToken.cancel();
        }
    },[params]);
    return state;
}
export default useFetchingGallery;