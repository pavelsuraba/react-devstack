import React from 'react';
import Greeting from 'components/Greeting';
import Logo from 'components/Logo';
import styled from 'styled-components';

const HomeContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const HomeGreeting = styled.div`
    margin: 0 0 10px 0;
`;

export default () => (
    <HomeContainer>
        <HomeGreeting>
            <Greeting/>
        </HomeGreeting>
        <Logo large/>
    </HomeContainer>
);