import React, { Component} from 'react';
import {BrowserRouter, Link,Route} from 'react-router-dom'


const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topic = ({ match }) => {
 
  return(
  <div>
    <h3>{match.params.topicId}</h3>
  </div>);
}


const Topics = ({match}) => {
   
  return(
  <div>
    <h2> Topics </h2>
    <ul>
    <li>
      <Link to={`${match.path}/rendering`}>Rendering with React</Link>
    </li>
    <li>
      <Link to={`${match.path}/components`}>Components</Link>
    </li>
    <li>
      <Link to={`${match.path}/props-v-state`}>Props v. state</Link>
    </li>
    </ul>
      <Route path={`${match.path}/:topicId`} component={Topic} />
  
  </div>);
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <nav>
            <Link to="/">Home</Link><hr></hr>
            <Link to="/about">About</Link><hr></hr>
            <Link to="/topics">Topics</Link><hr></hr>
        </nav>
          <Route path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/topics" component={Topics} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
