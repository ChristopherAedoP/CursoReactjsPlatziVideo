// Importamos dependencias de React
import React from 'react';
import { render } from 'react-dom';
import Home from './../pages/containers/home';

import data from '../api.json';

// Referenciamos un elemento con ID app
const HomeContainer = document.getElementById('home-container');

// Insertamos en una constante lo que queremos renderizar
const holaMundo = <h1>Hola Mundo!!!</h1>;

// Le decimos a ReactDOM que renderizar y donde renderizar
render(<Home data={data} />, HomeContainer);
