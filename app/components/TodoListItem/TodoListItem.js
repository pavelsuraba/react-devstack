import React from 'react';
import styled from 'styled-components';

const Item = styled.li`
    display: flex;
    justify-content: space-between;
    & + & {
        margin-top: 5px;
    }
`;

const Button = styled.button`
    position: relative
    border: none;
    color: #EC644B;
    line-height: 1;
    font-size: 20px;
    width: 25px
    height: 25px
    background-color: transparent;
    cursor: pointer;
    transition: transform 400ms ease-in-out;
    transform-origin: 50% 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    &:before {
        content: '';
        position: absolute;
        top: 0;
        right: -5px;
        bottom: 0;
        left: -5px;
    }
    &:hover {
        transform: rotate(180deg)
    }
    .close {
        stroke: #D91E18;
        fill: transparent;
        stroke-linecap: round;
        stroke-width: 3;       
    }
`;

const TodoListItem = (props) => {
    function handleRemove() {
        const id = props.id;
        props.removeTodo(id);
    }
    return (
        <Item>
            <p>{props.task}</p>
            <Button onClick={handleRemove}>
                <svg viewBox="0 0 40 40" width="20" height="20">
                    <path className="close" d="M 10,10 L 30,30 M 30,10 L 10,30" />
                </svg>
            </Button>
        </Item>
    )
}

export default TodoListItem;