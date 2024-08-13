import React, { useContext, useState } from 'react';
import { Button, Card, Container, Form, Row, Col } from 'react-bootstrap';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { login, registration } from '../http/userApi';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';


const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE;
    const navigate = useNavigate()
    
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const click = async () => {
        try {
            let data;
            if(isLogin) {
                data =  await login(email, password)
            } else {
                data = await registration(email, password)
            }
            user.setUser(user)
            user.setIsAuth(true)
            navigate(SHOP_ROUTE)

        } catch(e) {
            alert(e.response.data.messege)
        }
    }

    return (
        <Container
            className='d-flex justify-content-center align-items-center'
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className='p-5'>
                <h2 className='m-auto'>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className='d-flex flex-column'>
                    <Form.Control
                        className='mt-3'
                        placeholder='Введите свой Email...'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className='mt-3'
                        placeholder='Введите свой пароль...'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type='password'

                    />
                    <Row className='d-inline-flex align-items-center justify-content-between mt-3'>
                        <Col>
                            {isLogin
                                ?
                                <div style={{ whiteSpace: 'nowrap' }}>
                                    Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                                </div>
                                :
                                <div style={{ whiteSpace: 'nowrap' }}>
                                    Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                                </div>
                            }
                        </Col>
                        <Col className='d-flex justify-content-end'>
                            <Button
                                variant='outline-success'
                                style={{width: 'auto'}}
                                onClick={click}
                            >
                                {isLogin ? 'Войти' : 'Регистрация'}
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;