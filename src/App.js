import React from 'react';
import './App.css';
import 'react-bootstrap';
import '../node_modules/@fortawesome/fontawesome-free/js/all';
import '../node_modules/@fortawesome/fontawesome-free/css/fontawesome.css';
import { Switch, Route } from 'react-router-dom';

import Navigation from './components/navigation/navigation.component';
import HomePage from './pages/homepage/homepage.component';
import ProfessionalPage from './pages/professional/professional.component';
import SkillsPage from './pages/skills/skills.component';
import WorkPage from './pages/work/work.component';
import ContactPage from './pages/contact/contact.component';
import Footer from './components/footer/footer.component';


class App extends React.Component {
  constructor() {
    super();
    this._homePage = React.createRef();
    this._professionalPage = React.createRef();
    this._skillsPage = React.createRef();
    this._workPage = React.createRef();
    this._contactPage = React.createRef();

    this._scrollPos = 0;
    
    this.mainNavLinks = null;

    this.handleContactMeClick = this.handleContactMeClick.bind(this);
    this.handleScroll = this.handleScroll.bind(this);

  }

  handleScroll(e) {
    if ((document.body.getBoundingClientRect()).top > this._scrollPos) {
        console.log("UP");
    } else {
        console.log("DOWN");
    }
      // saves the new position for iteration.
      this._scrollPos = (document.body.getBoundingClientRect()).top;
    
  }


  handleContactMeClick() {
    scrollToComponent(this._contactPage.current);
  }

  render() {
    return (
      <>
      <Switch>
        <Navigation />
      </Switch>
      <Switch>
        
          <Route  exact path="/" component={HomePage} />
          <Route path="/professional" component={ProfessionalPage} />
          <Route path="/skills" component={SkillsPage} />
          <Route path="/work" component={WorkPage} />
          <Route path="/about" component={ContactPage} />
        </Switch>
        <Footer />
        
        </>
    );
  }
}


export default App;
