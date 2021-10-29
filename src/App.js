import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Form from './pages/Form';
import Err404 from './components/Err404';
import Login from './pages/Login';

function App() {
  return (
    <div className="main">
        <Router>
          <Nav/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/upload" component={Form}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/image-detail/:id" component={Detail}/>
            <Route path="*" component={Err404}/>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
