export const add = (num) => {
    return {
        type: 'ADD',
        payload: num
    };
};

export const subtract = (num) => {
    return {
        type: 'SUBTRACT',
        payload: num
    };
};