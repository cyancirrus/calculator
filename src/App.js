import { render } from '@testing-library/react';
import React from 'react';
import './App.css';
import WebsiteMetaStructure from './ws_structure/structure'
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
            <Link to="what">hello beeeeeee</Link>
        </div>
    );
  };
}

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <header>
//           this is my website!
//         </header>

//         <main>
//           {this.props.children}
//         </main>

//         <fotter>
//           your copywrite message
//         </fotter>
//       </div>
//     )
//   }
// }

export default App;
