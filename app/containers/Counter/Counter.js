import React, { Component } from 'react';
import { add, subtract } from './counterActions/counterActions';
import { connect } from 'react-redux';
import Count from 'components/Count/Count';
import Button from 'components/Button/Button';

const mapStateToProps = (state) => {
    return {
        count: state.counter
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addNumber: (num) => {
            dispatch(add(num));
        },
        subtractNumber: (num) => {
            dispatch(subtract(num));
        }
    };
};

class Counter extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { addNumber, subtractNumber, count } = this.props;
        return (
            <div>
                <Count count={count} />
                <Button eventHandler={addNumber.bind(null, 1)}>Add 1</Button>
                <Button eventHandler={subtractNumber.bind(null, 1)}>Subtract 1</Button>
            </div>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);