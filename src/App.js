import {
    HashRouter as Router,
    Route, 
    Switch
} from 'react-router-dom';

import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';
import Visions from './components/Visions/Visions';

function App() {
  return (
    <>
    <Header />
    <Router basename="/outset">
        <Switch>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/contact">
                <Contact />
            </Route>
            <Route path="/visions">
                <Visions />
            </Route>
            <Route path="/">
                <LandingPage />
            </Route>
        </Switch>
    </Router>
    </>
  );
}

export default App;
