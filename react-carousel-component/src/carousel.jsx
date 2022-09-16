import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imgList: props.images,
      int: 0,
      position: 0
    };

    this.Icons = this.Icons.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.timerJob = this.timerJob.bind(this);
  }

  timerJob() {
    const interval = setInterval(() => {
      if (this.state.position === (this.state.imgList.length - 1)) {
        this.setState({
          position: 0
        });
      } else {
        this.setState({
          position: (this.state.position + 1)
        });
      }
    }, 3000);
    this.setState({
      int: interval
    });
  }

  componentDidMount() {
    this.timerJob();
  }

  clickHandler(event) {
    clearInterval(this.state.int);
    if (event.target.className === 'fa-solid fa-arrow-right-long') {
      if (this.state.position === (this.state.imgList.length - 1)) {
        this.setState({
          position: 0
        });
      } else {
        this.setState({
          position: (this.state.position + 1)
        });
      }
    } else if (event.target.className === 'fa-solid fa-arrow-left-long') {
      if (this.state.position === 0) {
        this.setState({
          position: (this.state.imgList.length - 1)
        });
      } else {
        this.setState({
          position: (this.state.position - 1)
        });
      }
    } else if (event.target.className === 'fa-solid fa-circle' || event.target.className === 'fa-regular fa-circle') {
      this.setState({
        position: parseInt(event.target.id)
      });
    }
    this.timerJob();
  }

  Icons(props) {
    const imgList = props.imgList;
    let pos = -1;
    const iconList = imgList.map(img => {
      pos++;
      return (<i onClick={this.clickHandler} key={img.id} id={pos} className={(img.src === this.state.imgList[this.state.position].src) ? 'fa-solid fa-circle' : 'fa-regular fa-circle'}></i>);
    });
    return iconList;
  }

  render() {
    return (
      <>
        <div className='carousel-area'>
          <i onClick={this.clickHandler} className="fa-solid fa-arrow-left-long"></i>
          <img src={this.state.imgList[this.state.position].src} alt={this.state.imgList[this.state.position].alt} />
          <i onClick={this.clickHandler} className="fa-solid fa-arrow-right-long"></i>
        </div>
        <div className='icon-area'>
          <this.Icons imgList={this.state.imgList} />
        </div>
      </>
    );
  }
}
