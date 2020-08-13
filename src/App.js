import React, {Component} from 'react';
import './App.css';
import { sampleText } from './sampleText'
import marked from 'marked'

class App extends Component {
state = {
  text: sampleText
}

  handleChangeText = (e) => {
    const text = e.target.value
    this.setState({text})
  }

  renderText = text => {
    const __html = marked(text , {sanitize: true})
    return { __html }
  }

  render(){
    return (
      <div className='container'>
        <div className="row">
          <div className="col-sm-6"><textarea value={this.state.text} onChange={this.handleChangeText} className='form-control' rows="15" ></textarea></div>
          <div className="col-sm-6"><div dangerouslySetInnerHTML={this.renderText(this.state.text)}></div></div>
        </div>
      </div>
    );
  }
}

export default App;
