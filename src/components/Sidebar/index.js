import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlaylistsActions } from '../../store/ducks/playlists';

import { Container, NewPlaylist, Nav } from './styles';
import AddPlaylistIcon from '../../assets/images/add_playlist.svg';

import Loading from '../Loading';

function Sidebar({ getPlaylistsRequest, playlists }) {
    useEffect(() => {
        getPlaylistsRequest();
    }, [getPlaylistsRequest]);
    return (
        <Container>
            <div>
                <Nav main>
                    <li>
                        <Link to="/">Navegar</Link>
                    </li>
                    <li>
                        <a href="#/">Radio</a>
                    </li>
                </Nav>

                <Nav>
                    <li>
                        <span>SUA BIBLIOTECA</span>
                    </li>
                    <li>
                        <a href="#/">Seu Daily Mix</a>
                    </li>
                    <li>
                        <a href="#/">Tocadas recentemente</a>
                    </li>
                    <li>
                        <a href="#/">Músicas</a>
                    </li>
                    <li>
                        <a href="#/">Albums</a>
                    </li>
                    <li>
                        <a href="#/">Artistas</a>
                    </li>
                    <li>
                        <a href="#/">Estaçoes</a>
                    </li>
                    <li>
                        <a href="#/">Arquivos locais</a>
                    </li>
                    <li>
                        <a href="#/">Videos</a>
                    </li>
                    <li>
                        <a href="#/">Podcasts</a>
                    </li>
                </Nav>

                <Nav>
                    <li>
                        <span>PLAYLISTS</span>
                        {playlists.loading && <Loading />}
                    </li>
                    {playlists.data.map(playlist => (
                        <li key={playlist.id}>
                            <Link to={`/playlists/${playlist.id}`}>
                                {playlist.title}
                            </Link>
                        </li>
                    ))}
                </Nav>
            </div>

            <NewPlaylist>
                <img src={AddPlaylistIcon} alt="Adiconar playlist" />
                Nova playlist
            </NewPlaylist>
        </Container>
    );
}

const mapStateToProps = state => ({
    playlists: state.playlists,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(PlaylistsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);

Sidebar.propTypes = {
    getPlaylistsRequest: PropTypes.func.isRequired,
    playlists: PropTypes.shape({
        data: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number,
                title: PropTypes.string,
            })
        ),
        loading: PropTypes.bool,
    }).isRequired,
};
