import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    max-width: 300px;
    text-align: center;
    margin: 75px auto 0 auto;
`;

const TodoApp = (props) => {
    return (
        <Wrapper>
            {props.children}
        </Wrapper>
    )
}

export default TodoApp;