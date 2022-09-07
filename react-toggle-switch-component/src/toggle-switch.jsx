import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: 'off'
    };
  }

  handleClick() {
    if (this.state.toggle === 'off') {
      this.setState({ toggle: 'on' });
    } else {
      this.setState({ toggle: 'off' });
    }
  }

  render() {
    return (
      <>
        <div className="button-area">
          <div className={(this.state.toggle === 'off') ? 'btn-slider-off' : 'btn-slider-on'}></div>
          <button className={(this.state.toggle === 'off') ? 'btn-off' : 'btn-on'}></button>
          <span>{ (this.state.toggle === 'off') ? 'off' : 'on'}</span>
        </div>
      </>
    );
  }
}
