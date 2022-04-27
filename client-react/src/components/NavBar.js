import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logOut } from '../store/reducers/userReducer'
import {Navbar, Nav,Button, Container} from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'
import { SHOP_ROUTE,ADMIN_ROUTE, LOGIN_ROUTE } from '../utils/consts'

const NavBar = () => {
    const navigate = useNavigate();
    const user = useSelector(state => state.user);
    const dispath = useDispatch();

    return (
        <Navbar bg="dark" variant="dark" >
            <Container>
                <NavLink className="ml-auto" style={{ color: 'white' }} to={SHOP_ROUTE}>RozetkaSub</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto ml-2" >
                        <Button 
                        variant={"outline-light"}
                        onClick={() => navigate(ADMIN_ROUTE)}
                        >Admin panel
                        </Button>
                        <Button 
                        className="ml-2"
                        variant={"outline-light"}
                        onClick={()=> dispath(logOut())}
                        >LogOut</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" >
                        <Button 
                        variant={"outline-light"}
                        onClick={()=>navigate(LOGIN_ROUTE)}
                        >LogIn</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    )
}

export default NavBar