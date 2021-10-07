/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from '@emotion/react'
import { Switch, Route } from 'react-router-dom';
import Login from './screens/Login';
import Signup from './screens/Signup';
import { Root, Container } from './componets/lib'
import NotFound from './screens/NotFound';

const UnauthorizedApp = ({ signup, login }) => {
    return (
        <Root>
          <Container>
            <Switch>
            <Route exact path='/'>
                    <Login handleSubmit={login} />
                </Route>
                <Route exact path='/login'>
                    <Login handleSubmit={login} />
                </Route>
                <Route exact path='/signup'>
                    <Signup handleSubmit={signup} />
                </Route>
                <Route path='*'>
                    <NotFound />
                </Route>
            </Switch>
          </Container>
        </Root>

    )
};

export default UnauthorizedApp