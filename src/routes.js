import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Browse from './pages/Browse';
import Playlist from './pages/Playlist';

function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Browse} />
            <Route path="/playlists/:id" component={Playlist} />
        </Switch>
    );
}

export default Routes;
