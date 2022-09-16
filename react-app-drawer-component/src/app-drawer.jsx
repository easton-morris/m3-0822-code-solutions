import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      list: this.props.list
    };

    this.MenuList = this.MenuList.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  MenuList(props) {
    const list = props.list;
    const listItems = list.map(item => {
      return (
        <li className='list-item' key={item.id}>{item.name}</li>
      );
    });
    return (listItems);
  }

  handleClick(event) {

    if (event.target.className === 'fa-solid fa-bars') {
      this.setState({
        open: !this.state.open
      });
    } else if (event.target.className === 'darken') {
      this.setState({
        open: !this.state.open
      });
    }

  }

  render() {
    return (
      <>
      <div onClick={this.handleClick} className={this.state.open ? 'darken' : 'hidden darken'}></div>
      <i onClick={this.handleClick} className="fa-solid fa-bars"></i>
      <div>
          <div className={this.state.open ? 'menu open' : 'menu closed'}>
          <ul className='nav-menu'>
            <li className='header'>List of Items</li>
            <this.MenuList list={this.state.list} />
          </ul>
        </div>
      </div>
      </>
    );
  }
}
