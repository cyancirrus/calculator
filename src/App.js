import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
        <div style={{
          backgroundColor:"#876666"
          }}>
          <main>
            {this.props.children}
          </main>
            <button class="ui button">
              <Link to="/home">home</Link>
            </button>
            <button class="ui button">
              <Link to="calculator">calculator</Link>
            </button>
            <button class="ui button">
              <Link to="blog">blog</Link>
            </button>
          </div>
    );
  };
}

export default App;
