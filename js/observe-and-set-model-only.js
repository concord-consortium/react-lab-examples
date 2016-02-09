import React from 'react';
import ReactDOM from 'react-dom';
import Lab from 'react-lab';
import interactive from './interactive.json';
import model from './model.json';

// These properties can be set directly in the interactive JSON too.
interactive.showTopBar = false;
interactive.showBottomBar = false;
interactive.template = "model-only";
interactive.theme = "no-framing";
interactive.padding = 0;
delete interactive.components;
delete interactive.layout;

class Interactive extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labProps: {
        targetTemperature: 4000
      },
      labPlaying: true
    };
    this.labPropChanged = this.labPropChanged.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handlePlayingChange = this.handlePlayingChange.bind(this);
  }

  labPropChanged(name, val) {
    if (name === 'targetTemperature') {
      this.setState({labProps: {targetTemperature: val}});
    }
  }

  handlePlayingChange(event) {
    this.setState({labPlaying: event.target.checked});
  }

  handleInputChange(event) {
    let newTemp = parseFloat(event.target.value);
    if (isNaN(newTemp)) newTemp = 0;
    if (newTemp > 5000) newTemp = 5000;
    this.setState({labProps: {targetTemperature: newTemp}});
  }

  render() {
    return (
      <div>
        <Lab interactive={interactive} model={model} height='380px' playing={this.state.labPlaying}
             props={this.state.labProps} observedProps={['targetTemperature']}
             onPropChange={this.labPropChanged}/>
        <div>
          Playing: <input type='checkbox' checked={this.state.labPlaying} onChange={this.handlePlayingChange}/>
        </div>
        <div>
          Target temperature:
          <input type='text' value={this.state.labProps.targetTemperature} onChange={this.handleInputChange}/>
          <input type='range' value={this.state.labProps.targetTemperature} onChange={this.handleInputChange}
                 min="0" max="5000"/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Interactive/>, document.getElementById('app'));
