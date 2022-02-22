import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';
//css
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';
//Router
import Home from './components/Home'
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
    <div className='bg-black'>
    <nav className="nav navbar-nav flex-row-reverse">
      <Ul className='d-flex'>
        <li>
          <Link to="/" className='text-link'>Home</Link>
        </li>
        <li>
          <Link to="/Login" className='text-link'>Login</Link>
        </li>
      </Ul>
    </nav>
    </div>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/Login" component={Login} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;

const Ul = styled.li`
  padding: 30px;
  list-style: none;
  gap: 12px;
  `;