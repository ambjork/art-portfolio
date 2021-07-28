import './App.scss';
import { StyledLink } from './styles/styles'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Contact from './contact/Contact.js'
import PortfolioContainer from './portfolio/PortfolioContainer.js'
import { NAME, EMAIL } from './constants/constants'

function App() {
  return (
      <Router>
      <header className='app-header'>
        <nav>
          <StyledLink to='/'>Portfolio</StyledLink>
          <StyledLink to='/contact'>Contact</StyledLink>
        </nav>
        </header>

        <section>
          <Switch>
            <Route exact path='/' component={PortfolioContainer} />
            <Route exact path='/contact' component={Contact} />
            </Switch>
          </section>
        
        <footer className='footer-info'>
                <p>Webbsida designad av {NAME}</p>
                <a href='mailto:amandabjorklund0@gmail.com'>{EMAIL}</a>
        </footer>
        </Router>
  );
}

export default App;
