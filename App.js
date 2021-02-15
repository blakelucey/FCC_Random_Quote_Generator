import './App.css';
import Button from './Button.js';
import React, {Component} from 'react';


class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        quotes: [],

      }

  }

//Mounting Component fetches data from the link below.  Which contains the array used in the code.
  componentDidMount() {
    fetch('https://gist.githubusercontent.com/signed0/d70780518341e1396e11/raw/2a7f4af8d181a714f9d49105ed57fafb3f450960/quotes.json')
    .then(data => data.json())
    .then(quotes => this.setState({quotes}))
  };

//Generate New Quote
  newQuote() {
    var randomNumber = Math.floor(Math.random() * (this.state.quotes.length));
    document.getElementById('quoteDisplay').innerHTML = this.state.quotes[randomNumber];
  }

  render(){
  return (
    <div className="App" id = 'quote-box'>
      <header className="App-header">
        <div id = 'quoteDisplay'>


        </div>
        <h1 id = 'text'>
        </h1>
          <p id = 'author'>
          </p>
          <a
          id = 'tweet-quote'>
          <p>Twitter Link Here</p>
            </a>


          <Button buttonDisplayName = 'New Quote' clickHandler = {this.newQuote()}/>
      </header>
    </div>
  );
}
}

export default App;
