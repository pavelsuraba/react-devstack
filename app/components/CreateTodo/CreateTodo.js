import React, { Component } from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div`
    margin: 20px 0;
`;

const Form = styled.form`
    display: flex;
    justify-content: space-around;
`;

const Input = styled.input`
    display: inline-block;
    height: 30px;
    min-width: 170px;
    padding: 0 0 0 10px;
    font-size: 12px; 
    outline: none;
    border: 1px solid #D2D7D3;        
    &:focus {
        border: 1px solid #16A085;
    }
`;

const Button = styled.button`
    display: inline-block
    height: 30px;
    background-color: #16A085;
    border: none;
    padding: 0 20px;
    font-size: 14px;
    color: #fff;
    line-height: 1;
    cursor: pointer;
    transition: all 300ms ease;
    &:hover {
        background-color: #0f7b66;            
    }
`;

export default class CreateTodo extends Component {
    constructor() {
        super();
        this.addTodoHandler = this.addTodoHandler.bind(this);
    }
    addTodoHandler(e) {
        e.preventDefault();
        const input = this.input;
        if (input.value.length > 0) this.props.addTodo(input.value);
        input.value = '';
    }
    render() {
        return (
            <FormWrapper>
                <Form onSubmit={this.addTodoHandler} action="">
                    <Input type="text" placeholder="What do I need to do?" innerRef={comp => this.input = comp}/>
                    <Button>Create</Button>
                </Form>
            </FormWrapper>
        );
    }
}

/* innerRef explained */
/* https://github.com/styled-components/styled-components/issues/102 */
