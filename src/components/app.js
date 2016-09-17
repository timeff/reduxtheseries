import React, { Component } from 'react';
import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <Link to={{pathname:'/'}}>Homepage</Link>
            <ul>
              <li>
                <Link to={{pathname:'/pages'}}>All Pages</Link>
              </li>
            </ul>
          </nav>
        </header>
        {this.props.children}
      </div>
    );
  }
}

export default App;
