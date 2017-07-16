import React from 'react'
import { Route, IndexRoute, Redirect, IndexRedirect, hashHistory } from 'react-router'


import Layout from './components/utils/layout';
import Domu from './pages/domu';
import Pacienti from './pages/pacienti';
import Tagy from './pages/tagy';
import PacientiRegistrace from './pages/pacientiRegistrace';

const routes = (
    <Route path="/" component={Layout}>
        <IndexRoute component={Domu}/>
        <IndexRedirect to="domu" />
        <Route path="domu" component={Domu}/>
        <Route path="pacienti" component={Pacienti}/>
        <Route path="pacientinew" component={PacientiRegistrace}/>
        <Route path="tagy" component={Tagy}/>
        <Redirect from="*" to="domu" />
    </Route>
);

export default routes;