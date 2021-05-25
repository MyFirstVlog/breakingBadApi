import { useCallback, useContext, useState } from "react";
import Context from '../context/UserContextProvider'
import getFavs from "../services/getFavs";
import login from '../services/login'

export default function useUser(){
    const {favs,jwt,setFavs, setJWT} = useContext(Context)
    const [state, setState] = useState({loading:false, error:false})

    const Login = useCallback(({username, password}) => {
        setState({loading:true, error:false})
        login({username, password})
        .then(jwt => {
            setState({loading:false, error:true})
            window.sessionStorage.setItem('jwt',jwt)
            setJWT(jwt)
        })
        .catch(err =>{
            setState({loading:false, error:true})
            window.sessionStorage.removeItem('jwt')
            console.error(err)
        })
    },[setJWT])
    
    const fav = useCallback(({id})=>{
        getFavs({id})
        .then(favs => setFavs(favs) )
        .catch(er => console.log(er))
    },[]) 


    const Logout = useCallback(()=>{
        window.sessionStorage.removeItem('jwt')
        setJWT(null)
        
    }, [setJWT])


    return{
        fav,
        favs,
        isLogged : Boolean(jwt),
        isLoginLoading:state.loading,
        isLoginError: state.error,
        Login, 
        Logout
    }

}
