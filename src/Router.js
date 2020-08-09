import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Auth from './page/formulaire';
import Ajouter_client from './page/client';
import Dasboard from './page/client';




const Main = props => (
    <Switch>
        <Route exact path='/Auth' component={Auth} />
        <Route exact path='/client' component={Ajouter_client} />
        <Route exact path='/dashboard' component={Dasboard } />
    </Switch>
);
export default Main;