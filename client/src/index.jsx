import React from 'react';
import ReactDOM from 'react-dom';
import AppDescription from './App.jsx';

let roomId = window.location.href.split('/')[4];
ReactDOM.hydrate(<App roomId={roomId}></App>, document.getElementById('listings'));
