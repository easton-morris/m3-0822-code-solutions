import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      heat: 0,
      color: 'no-heat'
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let currHeat = this.state.heat;
    this.setState({
      heat: currHeat++
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      if (prevState.heat === 3) {
        this.setState({
          color: 'three-heat'
        });
      } else if (prevState.heat === 6) {
        this.setState({
          color: 'six-heat'
        });
      } else if (prevState.heat === 9) {
        this.setState({
          color: 'nine-heat'
        });
      } else if (prevState.heat === 12) {
        this.setState({
          color: 'twelve-heat'
        });
      } else if (prevState.heat === 15) {
        this.setState({
          color: 'fifteen-heat'
        });
      } else if (prevState.heat === 18) {
        this.setState({
          color: 'eighteen-heat'
        });
      }
    }
  }

  render() {
    return (
      <button onClick={this.handleClick()} className={this.state.color}>Hot Button</button>
    );
  }
}
