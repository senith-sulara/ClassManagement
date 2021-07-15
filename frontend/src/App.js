import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/navBar/navBar';
import Footer from './components/footer/footer.js';
import Home from './components/home/home';
import Teachers from './components/teachers/teachers';
import Contact from './components/contactUs/contactUs';
import Grade6 from './components/olevels/grade6';
import Grade7 from './components/olevels/grade7';
import Grade8 from './components/olevels/grade8';
import Grade9 from './components/olevels/grade9';
import Grade10 from './components/olevels/grade10';
import Grade11 from './components/olevels/grade11';
import Grade12 from './components/alevels/grade12';
import Grade13 from './components/alevels/grade13';




export default function App() {
  return (

    <div>
      <Router>
        <NavBar/>
        <section>
          <Switch>
          <Route path="/home" component={Home} exact />
          <Route path="/teachers" component={Teachers} />
          <Route path="/contactus" component={Contact} />
          <Route path="/grade6" component={Grade6} />
          <Route path="/grade7" component={Grade7} />
          <Route path="/grade8" component={Grade8} />
          <Route path="/grade9" component={Grade9} />
          <Route path="/grade10" component={Grade10} />
          <Route path="/grade11" component={Grade11} />
          <Route path="/grade12" component={Grade12} />
          <Route path="/grade13" component={Grade13} />
          </Switch>
          </section>
          <Footer/>
      </Router>
    </div>
  )
}


