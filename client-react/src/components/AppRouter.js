import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes';
import { useSelector } from 'react-redux'

const AppRouter = () => {
    const isAuth = useSelector((state) => state.user.isAuth);
    console.log(publicRoutes)

    return (
        <Routes>
            {isAuth && authRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} element={ <Component />} />
            ))}
            {publicRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} element={ < Component /> } />
            ))}
        </Routes>
    )
}

export default AppRouter