import React from 'react';

import Cover from '../../assets/images/cover.jpeg';

import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

import { Container, Header, SongList } from './styles';

export default function Playlist() {
    return (
        <Container>
            <Header>
                <img src={Cover} alt="Cover" />

                <div>
                    <span>PLAYLIST</span>
                    <h1>NOME PLAYLIST</h1>
                    <p>13 musicas</p>

                    <button type="button">PLAY</button>
                </div>
            </Header>

            <SongList cellPadding={0} cellSpacing={0}>
                <thead>
                    <th />
                    <th>Titulo</th>
                    <th>Artista</th>
                    <th>Album</th>
                    <th>
                        <img src={ClockIcon} alt="Duração" />
                    </th>
                </thead>

                <tbody>
                    <tr>
                        <td>
                            <img src={PlusIcon} alt="Adicionar" />
                        </td>
                        <td>Nome da album</td>
                        <td>Nome do artista</td>
                        <td>Nome da musica</td>
                        <td>3:26</td>
                    </tr>

                    <tr>
                        <td>
                            <img src={PlusIcon} alt="Adicionar" />
                        </td>
                        <td>Nome da album</td>
                        <td>Nome do artista</td>
                        <td>Nome da musica</td>
                        <td>3:26</td>
                    </tr>

                    <tr>
                        <td>
                            <img src={PlusIcon} alt="Adicionar" />
                        </td>
                        <td>Nome da album</td>
                        <td>Nome do artista</td>
                        <td>Nome da musica</td>
                        <td>3:26</td>
                    </tr>

                    <tr>
                        <td>
                            <img src={PlusIcon} alt="Adicionar" />
                        </td>
                        <td>Nome da album</td>
                        <td>Nome do artista</td>
                        <td>Nome da musica</td>
                        <td>3:26</td>
                    </tr>

                    <tr>
                        <td>
                            <img src={PlusIcon} alt="Adicionar" />
                        </td>
                        <td>Nome da album</td>
                        <td>Nome do artista</td>
                        <td>Nome da musica</td>
                        <td>3:26</td>
                    </tr>

                    <tr>
                        <td>
                            <img src={PlusIcon} alt="Adicionar" />
                        </td>
                        <td>Nome da album</td>
                        <td>Nome do artista</td>
                        <td>Nome da musica</td>
                        <td>3:26</td>
                    </tr>

                    <tr>
                        <td>
                            <img src={PlusIcon} alt="Adicionar" />
                        </td>
                        <td>Nome da album</td>
                        <td>Nome do artista</td>
                        <td>Nome da musica</td>
                        <td>3:26</td>
                    </tr>

                    <tr>
                        <td>
                            <img src={PlusIcon} alt="Adicionar" />
                        </td>
                        <td>Nome da album</td>
                        <td>Nome do artista</td>
                        <td>Nome da musica</td>
                        <td>3:26</td>
                    </tr>

                    <tr>
                        <td>
                            <img src={PlusIcon} alt="Adicionar" />
                        </td>
                        <td>Nome da album</td>
                        <td>Nome do artista</td>
                        <td>Nome da musica</td>
                        <td>3:26</td>
                    </tr>
                </tbody>
            </SongList>
        </Container>
    );
}
