import React, { useState } from 'react'
import { Container, Form, Card, Button, Row } from 'react-bootstrap'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts'
import { registration, login } from '../http/userAPI';
import { setUser, setIsAuth } from '../store/reducers/userReducer';
import { useSelector, useDispatch } from 'react-redux';

const Auth = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const click = async () => {
        try {
            let response = {};
            if (isLogin) {
                response = await login(email,password);
            } else {
                response = await registration(email,password);
            }
            dispatch(setUser(response));
            dispatch(setIsAuth(true));
            navigate(SHOP_ROUTE);
        } catch (e) {
            alert(e.response.data.message)
        }
        
    }

    return (
        <Container
            className='d-flex justify-content-center align-items-center'
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Authorization' : 'Registration'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control className="mt-3"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        autoComplete ="username"
                    />
                    <Form.Control className="mt-3"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Enter password"
                        type="password"
                        autoComplete ="new-password"
                    />
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        {isLogin ?
                            <div>No acсount?
                                <NavLink to={REGISTRATION_ROUTE}>Registration</NavLink>
                            </div>
                            :
                            <div>Have an account
                                <NavLink to={LOGIN_ROUTE}>Login</NavLink>
                            </div>
                        }

                        <Button 
                            className="mt-3 align-self-end" 
                            variant={"outline-success"}
                            onClick={click}
                            >
                            {isLogin ? 'Enter' : 'Registration'}
                        </Button>
                    </Row>

                </Form>
            </Card>
        </Container>
    )
}

export default Auth