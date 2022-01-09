import './App.css';
import { BrowserRouter as Router , Redirect, Route , Switch  } from "react-router-dom";
import Login from './component/Login';
import Register from './component/Register';
import Home from './component/Home';
import Dashboard from './component/Dashboard';
import { isLogin } from './Helper';
import CreateApi from './component/CreateApi';
import APi from './component/APi';

function App() {
  return (
    <Router>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route exact path="/login">
          {isLogin() ? <Redirect to="/dashboard"/> : <Login />}
        </Route>
        <Route exact path="/register" >
          {isLogin() ? <Redirect to="/dashboard"/>: <Register/>}
        </Route>
        <Route exact path="/dashboard">
          {isLogin() ? <Dashboard /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/create">
          {isLogin() ? <CreateApi /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/api/:id/:number" component={APi} />
      </Switch>
    </Router>
  );
}

export default App;
