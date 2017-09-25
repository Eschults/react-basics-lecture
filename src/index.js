import React from 'react';
import ReactDOM from 'react-dom';

// définir notre composant
class Hello extends React.Component {
  constructor(props) {
    super(props);

    this.state = { clicked: false }; // initial state
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // callback exécuté suite au clic
    this.setState({ clicked: true });
  }

  render() {
    return (
      <h1
        className={this.state.clicked ? 'clicked' : ''}
        onClick={this.handleClick}
      >
        Hello {this.props.name}
      </h1>
    );
  }
}

// créer une instance du composant
const hello = <Hello name="Boris" />;
// l'injecter dans le DOM
ReactDOM.render(hello, document.querySelector('.container'));
