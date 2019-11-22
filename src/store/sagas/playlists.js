import { call, put } from 'redux-saga/effects';

import api from '../../services/api';

import { Creators as PlaylistsActions } from '../ducks/playlists';
import { Creators as ErrorActions } from '../ducks/erro';

export function* getPlaylists() {
    try {
        const response = yield call(api.get, '/playlists');
        yield put(PlaylistsActions.getPlaylistsSuccess(response.data));
    } catch (error) {
        yield put(ErrorActions.setError('nao foi possivel obter as playlist.'));
    }
}
