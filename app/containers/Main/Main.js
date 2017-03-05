import React, { Component } from 'react';
import Greeting from 'components/Greeting/Greeting';
import Logo from 'components/Logo/Logo';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const GreetingContext = styled.div`
    margin: 0 0 10px 0;
`;

export default class Main extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <Container>
                <GreetingContext>
                    <Greeting/>
                </GreetingContext>
                <Logo large/>
                <img src={require('_assets/jpg/image.jpg')} width="70px" height="70px" alt=""/>
            </Container>
        );
    }
}
