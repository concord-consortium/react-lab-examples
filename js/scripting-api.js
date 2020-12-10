import React from 'react';
import ReactDOM from 'react-dom';
import Lab from 'react-lab';
import model from '../json/simple-model.json';

class Interactive extends React.Component {
  constructor(props) {
    super(props);
    this.addAtom = this.addAtom.bind(this);
    this.removeAtom = this.removeAtom.bind(this);
  }

  get api() {
    return this.refs.lab.scriptingAPI;
  }

  addAtom() {
    this.api.addRandomAtom();
  }

  removeAtom() {
    const randomAtom = Math.floor(Math.random() * this.api.getNumberOfAtoms());
    this.api.removeAtom(randomAtom);
  }

  render() {
    return (
      <div>
        <Lab ref="lab" model={model} height='380px' playing={true}/>
        <div>
          <button onClick={this.addAtom}>Add Atom</button>
          <button onClick={this.removeAtom}>Remove Atom</button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Interactive/>, document.getElementById('app'));
