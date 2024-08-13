import React, { useContext } from 'react';
import { Context } from '../index';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import Button from 'react-bootstrap/Button';
import {observer} from 'mobx-react-lite'
import Container from 'react-bootstrap/Container';



const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }
    
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <NavLink style={{color: "white", textDecoration: "none"}} to={SHOP_ROUTE}>Buy Device</NavLink>
                {user.isAuth ?
                    <Nav className="ms-auto" style={{color: "white"}}>
                        <Button
                            variant="outline-light"
                            onClick={() => navigate(ADMIN_ROUTE)}
                        >
                            Админ панель
                        </Button>
                        <Button
                            variant="outline-light"
                            className='ms-2'
                            onClick={() => logOut()}
                        >
                            Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ms-auto" style={{color: "white"}}>
                        <Button
                            variant="outline-light"
                            onClick={() => navigate(LOGIN_ROUTE)}
                        >
                            Авторизация
                        </Button>
                    </Nav>
                }
            </Container>
      </Navbar>
    );
});

export default NavBar;

