import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/">home</Link>
          <Link to="/about">about</Link>
          <Link to="/about/1">about_1</Link>
          <Link to="/about/2">about_2</Link>
          <Link to="/contact">contact</Link>
          <Link to="/contact/1">contact_1</Link>
          <Link to="/contact/2">contact_2</Link>
          <Link to="/test">test</Link>
          <Link to="/test">test2/switch</Link>
          <Link to="/contact/5">contact_5/404</Link>
        </nav>
        <Switch>
          <Route exact path="/">
            main
          </Route>
          <Route path="/about">
            <Switch>
              <Route exact path="/about">
                about
              </Route>
              <Route path="/about/1">
                about_1
              </Route>
              <Route path="/about/2">
                about_2
              </Route>
              <Redirect to="/404"></Redirect>
            </Switch>
          </Route>
          <Route path="/contact">
            <Switch>
              <Route exact path="/contact">
                contact
              </Route>
              <Route path="/contact/1">
                contact_1
              </Route>
              <Route path="/contact/2">
                contact_2
              </Route>
              <Redirect to="/404"></Redirect>
            </Switch>
          </Route>
          <Route path="/test">
            test
          </Route>
          <Route path="/test">
            need to use switch !test!
          </Route>
          <Route path="/404">404</Route>
        </Switch>
      </Router>
    </div >
  );
}

export default App;
