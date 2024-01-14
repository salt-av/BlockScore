import React from 'react';
import ReactDOM from 'react-dom/client';
import Buytkt from './components/BuyTicket';
import Home from './components/Home';
import TeamRegistrationForm from './components/TeamRegistrationForm';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
const myFirstElement = (
<>
<Router>
<Routes>
        <Route path="/buytkt" element={<Buytkt />} />
        <Route path="/" element={<Home />} />
        <Route path="/trm" element={<TeamRegistrationForm />} />
        
</Routes>
</Router>       
</>

);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myFirstElement);