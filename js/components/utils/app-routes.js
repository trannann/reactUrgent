import React from 'react';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import routes from '../../routes';
import urgentApp from '../../reducers/index';

export default class AppRoutes extends React.Component {
    constructor() {
        super();
        this.store = createStore(urgentApp);
    }

    render() {
        return (
            <Provider store={this.store}>
                <Router history={browserHistory} routes={routes} onUpdate={() => window.scrollTo(0, 0)}/>
            </Provider>
        );
    }
}