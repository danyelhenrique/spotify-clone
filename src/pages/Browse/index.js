import React from 'react';

import Cover from '../../assets/images/cover.jpeg';

import { Container, Title, List, Playlist } from './styles';

export default function Browse() {
    return (
        <Container>
            <Title>Navegar</Title>
            <List>
                <Playlist to="/playlists/1">
                    <img src={Cover} alt="Playlist" />

                    <strong>All music</strong>
                    <p>Relaze enquanto você programa ouvindo as melhores</p>
                </Playlist>

                <Playlist to="/playlists/1">
                    <img src={Cover} alt="Playlist" />

                    <strong>All music</strong>
                    <p>Relaze enquanto você programa ouvindo as melhores</p>
                </Playlist>

                <Playlist to="/playlists/1">
                    <img src={Cover} alt="Playlist" />

                    <strong>All music</strong>
                    <p>Relaze enquanto você programa ouvindo as melhores</p>
                </Playlist>

                <Playlist to="/playlists/1">
                    <img src={Cover} alt="Playlist" />

                    <strong>All music</strong>
                    <p>Relaze enquanto você programa ouvindo as melhores</p>
                </Playlist>
            </List>
        </Container>
    );
}
