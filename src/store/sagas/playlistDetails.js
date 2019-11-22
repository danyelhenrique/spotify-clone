import { call, put } from 'redux-saga/effects';

import api from '../../services/api';

import { Creators as PlayliDetailstsActions } from '../ducks/playlistDetails';
import { Creators as ErrorActions } from '../ducks/erro';

export function* getPlaylistDetails(action) {
    try {
        const response = yield call(
            api.get,
            `/playlists/${action.payload.id}?_embed=songs`
        );
        yield put(
            PlayliDetailstsActions.getPlaylistDetailsSuccess(response.data)
        );
    } catch (error) {
        yield put(
            ErrorActions.setError(
                'nao foi possivel obter os detalhes da playlist.'
            )
        );
    }
}
