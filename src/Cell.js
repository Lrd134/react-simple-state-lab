import React, {Component} from 'react';

export default class Cell extends Component {
  static counter = 0;
  constructor(props){
    super()
    this.state = {
      color: props.value
    }
  }

  changeColor = () => {
    this.setState({
      color: '#333'
    });
  }
  updateCounter = () => {
    Cell.counter = Cell.counter + 1;
    return Cell.counter;
  }
  render() {
    return (
      <div onClick={this.changeColor} className="cell" style={{textAlign: 'center', backgroundColor: this.state.color, color: 'white' }}>{this.updateCounter()}</div>
    )
  }
}