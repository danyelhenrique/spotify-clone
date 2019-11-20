import React from 'react';

import GlobalStyles from './styles/global';

import Sidebar from './components/Sidebar';
import Player from './components/Player';

import { Wrapper, Container } from './styles/app.styles';

function App() {
    return (
        <div className="App">
            <Wrapper>
                <GlobalStyles />
                <Container>
                    <Sidebar />
                </Container>
                <Player />
            </Wrapper>
        </div>
    );
}

export default App;
