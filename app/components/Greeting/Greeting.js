import React from 'react';
import styled from 'styled-components';
import { media } from '_utils/mixins';

const Text = styled.p`
    font-size: 16px;
    ${ media.desktop`
        font-size: 24px;
    `}
`;

const Name = styled.span`
    color: #61dafb;
    font-weight: 700;
`;

const Greeting = () => {
    return (
        <Text>
            <Name>React </Name>
            devstack
        </Text>
    );
};

export default Greeting;
