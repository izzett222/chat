/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from '@emotion/react'
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Login from './screens/Login';
import Signup from './screens/Signup';
import { Root } from './componets/lib'
import NotFound from './screens/NotFound';
import home from './assets/home.jpg';


const Layout = () => {
    return (
        <div
            css={{
                height: '100vh',
                width: '100vw',
                position: 'relative',
                boxShadow: '0px 3px 6px #EBECF0',
                display: 'flex',
                flexDirection: 'row'
            }}>
            <div css={{
                height: '100vh',
                backgroundImage: `url(${home})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                flexGrow: 1,
                "@media (max-width: 400px)": {
                    display: 'none'
                }
            }}></div>
            <Outlet />
        </div>)
}
const UnauthorizedApp = ({ signup, login }) => {
    return (
        <Root>
            <div css={{
                height: '100vh',
                width: '100vw',
                position: 'relative',
                boxShadow: '0px 3px 6px #EBECF0',
                display: 'flex',
                flexDirection: 'row'
            }}>
                <Routes>
                    <Route element={<Layout />}>
                        <Route exact path='/' element={<Login handleSubmit={login} />} />
                        <Route exact path='/signup' element={<Signup handleSubmit={signup} />} />
                        <Route exact path={'/login'} element={<Navigate to={'/'} replace />} />
                        <Route path='*' element={<NotFound />} />
                    </Route>

                </Routes>
            </div>
        </Root>

    )
};

export default UnauthorizedApp