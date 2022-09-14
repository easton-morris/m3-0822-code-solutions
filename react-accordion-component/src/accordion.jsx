import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: this.props.list,
      reveal: ''
    };

    this.handleClick = this.handleClick.bind(this);
    this.AccordionItems = this.AccordionItems.bind(this);
  }

  handleClick(event) {
    const target = event.target.id;

    if (event.target.id !== this.state.reveal) {
      this.setState({
        reveal: target
      });
    } else if (event.target.id === this.state.reveal) {
      this.setState({
        reveal: ''
      });
    }
  }

  AccordionItems(props) {
    const list = props.list;
    const listItems = list.map(item => {
      return (
        <div key={item.id}>
          <div onClick={this.handleClick} className='item-header' id={item.title}>
            <span>{item.title}</span>
          </div>
          <p className={(item.title === this.state.reveal) ? '' : 'closed'} id={item.title}>{item.text}</p>
        </div>
      );
    });
    return (listItems);
  }

  render() {
    return (
      <>
        <div className='list-area'>
          <this.AccordionItems list={this.state.list} />
        </div>
      </>
    );
  }
}
