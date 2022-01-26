import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.scss';
import Home from './Components/Home';
import Login from './Components/Login'
import ContentPage from './Components/ContentPage';
import Management from './Components/management/Management';
import ForgotPassword from './Components/ForgotPassword';
import Account from './Components/Account';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/*<ProtectedRoute exact path='/' component={CentralRoute}/>*/}
          <Route exact path='/' component={Home}/>
          <Route path='/login' component={Login}/>
          <Route path='/content-Page' component={ContentPage}/>
          <Route path='/management' component={Management}/>
          <Route path='/forgot-password' component={ForgotPassword}/>
          <Route path='/account' component={Account}/>

          <Route  exact path='/' component={Management}/>
          <Route  path='/setup' component={Management}/>
          <Route  path='/articles' component={Management}/>
          <Route  path='/comments' component={Management}/>
          <Route  path='/contacts' component={Management}/>
          <Route  path='/mail-list' component={Management}/>
          <Route render = {() => <h1>404 page not found</h1>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
