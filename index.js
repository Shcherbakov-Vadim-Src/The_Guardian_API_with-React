import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Fetch from './components/Fetch'; 


function App() {

    return (<div>
                <Fetch />
            </div>);
}


const rootElement = document.querySelector('#root');
ReactDOM.render(<App />, rootElement);