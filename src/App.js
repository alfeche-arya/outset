import {
    BrowserRouter as Router,
    Route, 
    Switch
} from 'react-router-dom';

import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';

function App() {
  return (
    <>
    <Header />
    <Router>
        <Switch>
            <Route path="/about">
                <About />
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
