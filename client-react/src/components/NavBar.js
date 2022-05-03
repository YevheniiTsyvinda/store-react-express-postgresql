import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logOut } from '../store/reducers/userReducer'
import { Navbar, Nav, Button, Container } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'
import { SHOP_ROUTE, ADMIN_ROUTE, LOGIN_ROUTE, BASKET_ROUTE } from '../utils/consts'

const NavBar = () => {
    const navigate = useNavigate();
    const user = useSelector(state => state.user);
    const dispath = useDispatch();
    return (
        <Navbar bg="dark" variant="dark" >
            <Container>
                <NavLink 
                    style={{ color: 'white' }}
                    to={SHOP_ROUTE}>RozetkaSub</NavLink>
                {user.isAuth ?
                    <Nav  >
                        <Button
                            variant={"outline-success"}
                            onClick={() => navigate(BASKET_ROUTE)}
                        >Basket</Button>
                        {user.user.role === 'ADMIN' ?
                            <Button
                                className="ms-2"
                                variant={"outline-light"}
                                onClick={() => navigate(ADMIN_ROUTE)}
                            >Admin panel
                            </Button>
                            :''
                        }
                        <Button
                            className="ms-2"
                            variant={"outline-light"}
                            onClick={() => dispath(logOut())}
                        >LogOut</Button>
                    </Nav>
                    :
                    <Nav >
                        <Button
                            variant={"outline-light"}
                            onClick={() => navigate(LOGIN_ROUTE)}
                        >LogIn</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    )
}

export default NavBar