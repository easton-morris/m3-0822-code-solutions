import React from 'react';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      password: '',
      success: false,
      message: 'A password is required.'
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let value = this.state.password;
    value = event.target.value;

    if (value === '') {
      this.setState({
        password: value,
        success: false,
        message: 'A password is required.'
      });
    } else if (value.length < 8) {
      this.setState({
        password: value,
        success: false,
        message: 'Your password is too short.'
      });
    } else if (value.length >= 8) {
      this.setState({
        password: value,
        success: true,
        message: ''
      });
    }
  }

  render() {
    return (
      <form>
        <label htmlFor="password">
          Password:
        </label>
        <input type="password" name="password" onChange={this.handleChange} />
        <i className={this.state.success ? 'fa-solid fa-check' : 'fa-solid fa-xmark'}></i>
        <p>{this.state.message}</p>
      </form>
    );
  }
}
