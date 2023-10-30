import { Component, ReactNode } from "react";

export default class ErrorGenerator extends Component {
  
 state = {isError: false}

  generateError = () => {
    this.setState({isError: true});
  }

  render(): ReactNode {
    if(this.state.isError) throw new Error('Generated Error');
    return <button className="error-generator" onClick={this.generateError} >Generate Error</button>;
  }
}