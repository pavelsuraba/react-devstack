import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
    font-size: 14px;
`;

const Info = (props) => {
    return <Text>{props.text}</Text>
}

export default Info;