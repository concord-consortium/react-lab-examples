import React from 'react';
import ReactDOM from 'react-dom';
import Lab from 'react-lab';
import interactive from './interactive.json';
import model from './model.json';

class Interactive extends React.Component {
  render() {
    return (
      <div>
        <Lab interactive={interactive} model={model} width='450px' height='345px' playing={true}/>
      </div>
    );
  }
}

ReactDOM.render(<Interactive/>, document.getElementById('app'));
