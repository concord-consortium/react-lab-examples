import React from 'react';
import ReactDOM from 'react-dom';
import Lab from 'react-lab';
import interactive from '../json/simple-interactive.json';
import model from '../json/simple-model.json';

class Interactive extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logs: []
    };
    this.handleLog = this.handleLog.bind(this);
  }

  handleLog(action, data) {
    this.state.logs.unshift(`[${new Date().toLocaleTimeString()}] ${action}: ${JSON.stringify(data)}`);
    this.setState({logs: this.state.logs.slice(0, 100)});
  }

  render() {
    return (
      <div>
        <Lab interactive={interactive} model={model} width='450px' height='345px' playing={true}
             onLogEvent={this.handleLog}/>
        <div>
          Logs:
          <pre className='logs'>
            {this.state.logs.join('\n')}
          </pre>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Interactive/>, document.getElementById('app'));
