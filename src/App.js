
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';

import Details from './components/Details';
import MediaPlayer from './components/MediaPlayer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function App() {
  return (
    <div className="App">
     
   
     <Router>
   <Header/>
       <Switch>
       <Route path="/login">
           <Login />
             
          </Route>
          <Route path="/details/:id">
           <Details />
             
          </Route>
          <Route path="/Media">
           <MediaPlayer />
             
          </Route>
         
          <Route path="/">
            <Home />
          </Route>
        </Switch>
     </Router>

    </div>
  );
}

export default App;
