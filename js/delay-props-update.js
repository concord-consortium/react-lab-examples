import React from 'react';
import ReactDOM from 'react-dom';
import Lab from 'react-lab';
import interactive from '../json/simple-interactive.json';
import model from '../json/simple-model.json';

class Interactive extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labProps: {
        targetTemperature: 4000
      }
    };
    this.labPropChanged = this.labPropChanged.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  labPropChanged(name, val) {
    if (name === 'targetTemperature') {
      this.setState({labProps: {targetTemperature: val}});
    }
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
        <div className="desc">Sometimes you might want to batch Lab properties update, e.g. when Lab's <pre>onChange</pre> scripts
          are expensive. Use <pre>propsUpdateDelay</pre> property.</div>
        <Lab interactive={interactive} model={model} width='450px' height='345px' playing={true}
             props={this.state.labProps} observedProps={['targetTemperature']}
             propsUpdateDelay={800}
             onPropChange={this.labPropChanged}/>
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
