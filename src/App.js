import {
    HashRouter as Router,
    Route, 
    Switch
} from 'react-router-dom';

import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';

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
            <Route path="/">
                <LandingPage />
            </Route>
        </Switch>
    </Router>
    <Footer />
    </>
  );
}

export default App;
