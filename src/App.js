import './App.scss';
import { StyledLink } from './styles/styles'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
// import Home from './home/Home.js'
import Contact from './contact/Contact.js'
import About from './about/About.js'
import Blog from './blog/Blog.js'
import PortfolioContainer from './portfolio/PortfolioContainer.js'
import { ARTISTS_ADDRESS_1, ARTISTS_CITY, ARTISTS_EMAIL, ARTISTS_NAME, ARTISTS_POSTCODE, ARTISTS_PHONE_NUMBER } from './constants/constants'

function App() {
  return (
      <Router>
      <header className='app-header'>
        <nav>
          {/* <StyledLink to='/'>Home</StyledLink> */}
          <StyledLink to='/blog'>Blog</StyledLink>
          <StyledLink to='/'>Portfolio</StyledLink>
          <StyledLink to='/contact'>Contact</StyledLink>
          <StyledLink to='/about'>About me</StyledLink>
        </nav>
        </header>

        <section>
          <Switch>
            {/* <Route exact path='/' component={Home} /> */}
            <Route exact path='/blog' component={Blog} />
            <Route exact path='/' component={PortfolioContainer} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/about' component={About} />
            </Switch>
          </section>
        
        <footer className='footer-info'>
                <p>{ARTISTS_NAME}</p>
                <address>{ARTISTS_ADDRESS_1}</address>
                <address>{ARTISTS_POSTCODE} {ARTISTS_CITY}</address>
                <address>{ARTISTS_EMAIL}</address>
                <address>{ARTISTS_PHONE_NUMBER}</address>
        </footer>
        </Router>
  );
}

export default App;
