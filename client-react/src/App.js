import React, {useState, useEffect} from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import NavBar from './components/NavBar';
import { useSelector, useDispatch } from 'react-redux';
import { setUser, setIsAuth } from './store/reducers/userReducer';
import {Spinner} from "react-bootstrap";
import { check } from './http/userAPI';


const App = () => {
    const {isAuth} = useSelector(state => state.user);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        if(isAuth){
            check().then(data => {
                dispatch(setUser(data));
                dispatch(setIsAuth(true));
            }).catch(e =>{
                console.log(e);
            }).finally(()=> {
                setLoading(false)
            });
        }
        setLoading(false)
    },[]);
    

    if(loading){
        return <Spinner animation={"grow"} />
    }

    return (
        <BrowserRouter>
            <NavBar />
            <AppRouter />
        </BrowserRouter>
    )
}

export default App