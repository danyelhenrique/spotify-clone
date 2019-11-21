import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/global';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Player from './components/Player';

import Routes from './routes';

import { Wrapper, Container, Content } from './styles/app.styles';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Wrapper>
                    <GlobalStyles />
                    <Container>
                        <Sidebar />
                        <Content>
                            <Header />
                            <Routes />
                        </Content>
                    </Container>
                    <Player />
                </Wrapper>
            </BrowserRouter>
        </div>
    );
}

export default App;
