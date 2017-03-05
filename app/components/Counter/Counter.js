import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin: 15px 0 0 0;
    font-size: 14px;
`;

const TodoListCounter = (props) => {
    return (
        <Wrapper>
            <p>Number of tasks: {props.number}</p>
        </Wrapper>
    );
};

export default TodoListCounter;
