import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';


class App extends Component {

    render () {
        return (
            <div>
                <p>Hello!</p>
            </div>
        )
    }
}


const rootElement = document.querySelector('#root');
ReactDOM.render(<App />, rootElement);