import React from 'react';
import ReactDOM from 'react-dom';
import Lab from 'react-lab';
import model from './model.json';

class Interactive extends React.Component {
  render() {
    return (
      <div>
        <Lab model={model} height='380px' playing={true}/>
      </div>
    );
  }
}

ReactDOM.render(<Interactive/>, document.getElementById('app'));
