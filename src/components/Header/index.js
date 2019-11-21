import React from 'react';

import UserAvatar from '../../assets/images/cover.jpeg';

import { Container, Search, User } from './styles';

export default function Header() {
    return (
        <Container>
            <Search>
                <input type="text" placeholder="Search" />
            </Search>

            <User>
                <img src={UserAvatar} alt="avatar" />
                the guy
            </User>
        </Container>
    );
}
