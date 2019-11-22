import { combineReducers } from 'redux';

import playlists from './playlists';
import playlistDetails from './playlistDetails';
import error from './erro';

export default combineReducers({
    playlists,
    playlistDetails,
    error,
});
