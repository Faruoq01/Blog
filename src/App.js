import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.scss';
import Home from './Components/Home';
import Login from './Components/Login'
import ContentPage from './Components/ContentPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/*<ProtectedRoute exact path='/' component={CentralRoute}/>*/}
          <Route exact path='/' component={Home}/>
          <Route path='/login' component={Login}/>
          <Route path='/content-Page' component={ContentPage}/>
          <Route render = {() => <h1>404 page not found</h1>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
