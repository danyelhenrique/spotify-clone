import React from 'react';

import { Container, NewPlaylist, Nav } from './styles';
import AddPlaylistIcon from '../../assets/images/add_playlist.svg';

export default function Sidebar() {
    return (
        <Container>
            <div>
                <Nav main>
                    <li>
                        <a href="#/">Navegar</a>
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
                    </li>
                    <li>
                        <a href="#/">Melhores do rock</a>
                    </li>
                </Nav>
            </div>

            <NewPlaylist>
                <img src={AddPlaylistIcon} alt="Adiconar playlist" />
                Nova playlist
            </NewPlaylist>
        </Container>
    );
}
