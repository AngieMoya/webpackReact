import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/global.scss';

//Crear un recurso para decirle hacia donde se va a importar la aplicación//
ReactDOM.render(<App />, document.getElementById('app'));
