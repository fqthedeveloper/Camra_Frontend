import React from 'react';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import Contact from './Contact';
import { Routes as Switch, Route } from 'react-router-dom';
import "../App.css"
import Service from './Service';
import CustamersReview from './CustamersReview';
import Gallery from './Gallery';
import Proudect from './Proudect';
import ReviewAdd from './ReviewAdd';
import Error from './404';

function Main() {
    return (
      <div className="App">
        <Header />
        <Switch>
            
            <Route path="/" element={<Home />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/custamer" element={<CustamersReview />} />
            <Route path='/reviewadd' element={<ReviewAdd />} />
            <Route path="/proudect" element={<Proudect />} />
            <Route path="*" element={<Error />} />


        </Switch>
        <Footer  />
      </div>

  );
}


export default Main;
