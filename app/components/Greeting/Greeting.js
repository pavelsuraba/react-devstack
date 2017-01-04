import React from 'react';
import styles from './Greeting.sss' 

const Greeting = () => {
    return (
        <p className={styles.text}>
            <span className={styles.react}>React </span>
            devstack
        </p> 
    );
}

export default Greeting; 