import React from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './config/reactotron';
import GlobalStyles from './styles/global';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import ErrorBox from './components/ErrorBox';

import Routes from './routes';
import store from './store';

import { Wrapper, Container, Content } from './styles/app.styles';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Wrapper>
                    <GlobalStyles />
                    <Container>
                        <Sidebar />
                        <Content>
                            <ErrorBox />
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
