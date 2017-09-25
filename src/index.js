import React from 'react';
import ReactDOM from 'react-dom';

// définir notre composant
function Hello() {
  return <h1>Hello {}</h1>;
}

// créer une instance du composant
const hello = <Hello />;
// l'injecter dans le DOM
ReactDOM.render(hello, document.querySelector('.container'));
