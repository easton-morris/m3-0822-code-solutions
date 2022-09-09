import React from 'react';

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: 0,
      start: true,
      interval: 0
    };

    this.handleButton = this.handleButton.bind(this);
    this.handleReset = this.handleReset.bind(this);

  }

  handleButton() {
    if (this.state.start) {
      const inter = setInterval(() => {
        let timer = this.state.time;
        timer++;
        this.setState({
          time: timer
        });
      }, 1000);
      this.setState({
        start: false,
        interval: inter
      });
    } else {
      clearInterval(this.state.interval);
      this.setState({
        start: true
      });
    }
  }

  handleReset() {
    if (this.state.start) {
      this.setState({
        time: 0
      });
    }
  }

  render() {
    return (
      <>
        <div onClick={this.handleReset} className='stopwatch-area'>
          <p className='time'>{this.state.time}</p>
        </div>
        <i onClick={this.handleButton} className={this.state.start ? 'fa-solid fa-play' : 'fa-solid fa-pause'}></i>
      </>
    );
  }

}
