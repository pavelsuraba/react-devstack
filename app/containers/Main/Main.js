import React, {Component} from 'react';
import Greeting from '../../components/Greeting/Greeting';
import Logo from '../../components/Logo/Logo';
import styles from './Main.sss';

export default class Main extends Component {
    constructor() {
        super(); 
    }
    render() { 
        return (
            <div className={styles.container}>
                <div className={styles.greeting}> 
                    <Greeting/>
                </div>
                <Logo/>
            </div>
        )
    }
}