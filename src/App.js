import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import MainWrap from './components/MainWrap';
import Header from './components/Header';
import SocialLinks from './components/SocialLinks';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import WhereWeAre from './components/WhereWeAre';
import ContactUs from './components/ContactUs';

import ScrollToTop from './components/ScrollToTop';
import PrivacyPolicy  from './components/PrivacyPolicy';
import TermsOfUse  from './components/TermsOfUse';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
 
    <Router>
         <Header/>
         <SocialLinks/>
         <ScrollToTop />
         <MainWrap>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about-us" element={<AboutUs/>}/>
                <Route path="/where-we-are" element={<WhereWeAre/>}/>
                <Route path="/contact-us" element={<ContactUs/>}/>
                <Route path="/privacy" element={<PrivacyPolicy/>}/>
                <Route path="/terms-of-use" element={<TermsOfUse/>}/>
                <Route path="*" element={<ErrorPage/>}/>
              </Routes>
          </MainWrap>
      <Footer/>
    </Router>
  );
}

export default App;
