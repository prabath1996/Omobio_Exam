import React, { Component } from 'react';
import './styles/foundation.min.css';
import Routes from './routes';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      appName: "ReactJS Feed Example",
      home: false
    }
  }
  render() {
    return (
      <div className="off-canvas-wrapper">
        <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>
          <div className="off-canvas-content" data-off-canvas-content>
            <Routes name={this.state.appName}/>
            
          </div>
        </div>
      </div>
    );
  }
}
export default App;