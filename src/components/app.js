import React, { Component } from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux'

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
                {this.props.status}
              </li>
            </ul>
          </nav>
        </header>
        {this.props.children}
        <footer><br />This is a footer</footer>
      </div>
    );
  }
}

const mapStateToProps = (state)=>({
  status:state.status
})

export default connect(mapStateToProps)(App);
