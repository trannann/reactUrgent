import React from 'react'
import { Route, IndexRoute, Redirect, IndexRedirect, hashHistory } from 'react-router'


import Layout from './components/utils/layout';
import Domu from './pages/domu';
import Pacienti from './pages/pacienti';
import Tagy from './pages/tagy';

const routes = (
    <Route path="/" component={Layout}>
        <IndexRoute component={Domu}/>
        <IndexRedirect to="domu" />
        <Route path="domu" component={Domu}/>
        <Route path="pacienti" component={Pacienti}/>
        <Redirect from="*" to="pacienti" />
        <Route path="tagy" component={Tagy}/>
    </Route>
);

export default routes;