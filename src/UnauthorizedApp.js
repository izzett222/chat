/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx, css } from '@emotion/react'
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './screens/Login';
import Signup from './screens/Signup';
import home from './assets/home.jpg'

const UnauthorizedApp = () => {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <div css={{ height: '650px', width: '1152px', boxShadow: '0px 3px 6px #EBECF0', display: 'flex', flexDirection: 'row' }}>
            <div  css={{height: '650px', width: '700px', background: `url(${home})`,backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat'}}>
            </div>
            <Switch>
            <Route exact path='/'>
                    <Login />
                </Route>
                <Route exact path='/login'>
                    <Login />
                </Route>
                <Route exact path='/signup'>
                    <Signup />
                </Route>
            </Switch>
          </div>
        </div>

    )
};

export default UnauthorizedApp