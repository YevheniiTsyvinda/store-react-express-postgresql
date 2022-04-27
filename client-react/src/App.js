import React, {useState, useEffect} from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import NavBar from './components/NavBar';
import { setUser, setIsAuth } from './store/reducers/userReducer';
import {Spinner} from "react-bootstrap";
import { check } from './http/userAPI';


const App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        check().then(data => {
            setUser(true);
            setIsAuth(true);
        }).finaly(()=> setLoading(false));
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