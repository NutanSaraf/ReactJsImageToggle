import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Clock extends React.Component{

  constructor(props){
    super(props);
    this.state = {image : "./bloom1.jpg"};
  }

  componentDidMount(){
    this.timerId = setInterval(
        () => this.tick(),
      1000
          );
  }

  componentWillMount(){
    clearInterval(this.timerId);
  }
  

  tick(){
    //this.state = {date:new Date()};
    if(this.state.image == "./bloom2.jpg")
    {this.setState({image:"./bloom3.jpg"});}
    else if(this.state.image == "./bloom1.jpg")
    {this.setState({image:"./bloom2.jpg"});}
    else
    {this.setState({image:"./bloom1.jpg"});}
    
  }

  render(){
    return(
      <div className="Output">
        <h1>Flower Bloom</h1>
        <img src={this.state.image} width="193" height="130" />
      </div>
    );
  }

}

ReactDOM.render(
  <Clock />, document.getElementById('root')
);
