import React from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './config/reactotron';
import GlobalStyles from './styles/global';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Player from './components/Player';

import Routes from './routes';
import store from './store';

import { Wrapper, Container, Content } from './styles/app.styles';

function App() {
    // console.tron.log('Oi');
    return (
        <Provider store={store}>
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
        </Provider>
    );
}

export default App;
