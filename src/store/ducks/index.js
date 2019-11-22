import { combineReducers } from 'redux';

import playlists from './playlists';
import playlistDetails from './playlistDetails';
import error from './erro';
import player from './player';

export default combineReducers({
    playlists,
    playlistDetails,
    error,
    player,
});
