import React from 'react';
import styled from 'styled-components';

const Text = styled.h1`
    font-size: 32px;
    line-height: 1;
`;

const Heading = (props) => {
    return (
        <Text>{props.children}</Text>
    );
};

export default Heading;
