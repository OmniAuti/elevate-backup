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
import AdvantageArrest from './components/ProductsAdvantageArrest';
import AdvantageArrest5mLBottle from './components/AdvantageArrest5mLBottle';
import AdvantageArrestAmpule from './components/AdvantageArrestAmpule';
import FluoriMax from './components/ProductsFluoriMax';
import FluoriMaxVarnishBottle from './components/FluoriMaxVarnishBottle';
import FluoriMaxVarnishAmpule from './components/FluoriMaxVarnishAmpule';
import DownloadsCatalogFirst from './components/DownloadsCatalogFirst';
import DownloadsAdvantageArrest from './components/DownloadsAdvantageArrest';
import DownloadsFluoriMax from './components/DownloadsFluoriMax';


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
                <Route path="/AdvantageArrest" element={<AdvantageArrest/>}/>
                <Route path="/AdvantageArrest/5mLBottle" element={<AdvantageArrest5mLBottle/>}/>
                <Route path="/AdvantageArrest/Ampule" element={<AdvantageArrestAmpule/>}/>
                <Route path="/FluoriMax" element={<FluoriMax/>}/>
                <Route path="/FluoriMax/Bottle" element={<FluoriMaxVarnishBottle/>}/>
                <Route path="/FluoriMax/Ampule" element={<FluoriMaxVarnishAmpule/>}/>
                <Route path="/downloads-catalog" element={<DownloadsCatalogFirst/>}/>
                <Route path="/downloads-AdvantageArrest" element={<DownloadsAdvantageArrest/>}/>
                <Route path="/downloads-FluoriMax" element={<DownloadsFluoriMax/>}/>
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
