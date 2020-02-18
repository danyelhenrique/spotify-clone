import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

import Loading from '../../components/Loading';

import { Creators as PlaylistDetailsActions } from '../../store/ducks/playlistDetails';
import { Creators as PlayerActions } from '../../store/ducks/player';

import { Container, Header, SongList, SongItem } from './styles';

function Playlist({ playlistDetails, getPlaylistDetailsRequest, ...props }) {
    const { match, loadSong, currentSong } = props;

    const [selectedSong, setSelectedSong] = useState(null);

  

    useEffect(() => {
    function loadPlaylistDetails() {
            const { id } = match.params;
            getPlaylistDetailsRequest(id);
        }
    loadPlaylistDetails();
    }, [match.params.id]);

    function renderDetails() {
        return (
            <Container>
                <Header>
                    <img src={playlistDetails.data.thumbnail} alt="Cover" />

                    <div>
                        <span>PLAYLIST</span>
                        <h1>{playlistDetails.data.title}</h1>
                        {!!playlistDetails.data.songs && (
                            <p>{playlistDetails.data.songs.length} musicas</p>
                        )}

                        <button type="button">PLAY</button>
                    </div>
                </Header>

                <SongList cellPadding={0} cellSpacing={0}>
                    <thead>
                        {/* <th /> */}
                        <tr>
                            <th>Titulo</th>
                            <th>Artista</th>
                            <th>Album</th>
                            <th>
                                <img src={ClockIcon} alt="Duração" />
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {!playlistDetails.data.songs ? (
                            <tr>
                                <td colSpan={5}>Nenhuma musica cadastrada</td>
                            </tr>
                        ) : (
                            playlistDetails.data.songs.map(song => (
                                <SongItem
                                    key={song.id}
                                    onClick={() => setSelectedSong(song.id)}
                                    onDoubleClick={() =>
                                        loadSong(song, playlistDetails.data.songs)
                                    }
                                    selected={selectedSong === song.id}
                                    playing={
                                        currentSong &&
                                        currentSong.id === song.id
                                    }
                                >
                                    <td>
                                        <img src={PlusIcon} alt="Adicionar" />
                                    </td>
                                    <td>{song.title}</td>
                                    <td>{song.author}</td>
                                    <td>{song.album}</td>
                                    <td>3:26</td>
                                </SongItem>
                            ))
                        )}
                    </tbody>
                </SongList>
            </Container>
        );
    }

    return playlistDetails.loading ? (
        <Container loading>
            {' '}
            <Loading />
        </Container>
    ) : (
        renderDetails()
    );
}

const mapStateToProps = state => ({
    playlistDetails: state.playlistDetails,
    currentSong: state.player.currentSong,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        { ...PlaylistDetailsActions, ...PlayerActions },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);

Playlist.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string,
        }),
    }).isRequired,
    getPlaylistDetailsRequest: PropTypes.func.isRequired,
    playlistDetails: PropTypes.shape({
        data: PropTypes.shape({
            thumbnail: PropTypes.string,
            title: PropTypes.string,
            description: PropTypes.string,
            songs: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.number,
                    title: PropTypes.string,
                    author: PropTypes.string,
                    album: PropTypes.string,
                })
            ),
        }),
        loading: PropTypes.bool,
    }).isRequired,
    loadSong: PropTypes.func.isRequired,
    currentSong: PropTypes.shape({
        id: PropTypes.string,
    }).isRequired,
};
