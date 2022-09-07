import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      heat: 0,
      color: 'no-heat'
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleHeat = this.handleHeat.bind(this);
  }

  handleClick() {
    let currHeat = this.state.heat;
    currHeat++;
    this.handleHeat(currHeat);
    this.setState({
      heat: currHeat
    });
  }

  handleHeat(currHeat) {
    if (currHeat === 3) {
      this.setState({
        color: 'three-heat'
      });
    } else if (currHeat === 6) {
      this.setState({
        color: 'six-heat'
      });
    } else if (currHeat === 9) {
      this.setState({
        color: 'nine-heat'
      });
    } else if (currHeat === 12) {
      this.setState({
        color: 'twelve-heat'
      });
    } else if (currHeat === 15) {
      this.setState({
        color: 'fifteen-heat'
      });
    } else if (currHeat === 18) {
      this.setState({
        color: 'eighteen-heat'
      });
    }
  }

  render() {
    return (
      <button onClick={this.handleClick} className={this.state.color}>Hot Button</button>
    );
  }
}
