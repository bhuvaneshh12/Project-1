// // import LoginComponent from './Components/login';
// // import SignUpComponent from './Components/Sign';
// // import React from 'react';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import HomePage from './Components/home';
// // import About from './Components/about';
// // import Contact from './Components/contact';
// // const App = () => {
// //   return (
// //     <Router>
// //       <Routes>
// //         <Route path="/" element={<LoginComponent />} />
// //         <Route path="/Sign" element={<SignUpComponent />} />
// //         <Route path="/home" element={<HomePage />} />
// //         <Route path="/about" element={<About/>} />
// //         <Route path="/contact" element={<Contact />} />
// //       </Routes>
// //     </Router>
// //   );
// // };

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/home';
import About from './Components/about';
import Contact from './Components/contact';
import LoginComponent from './Components/login';
import SignUpComponent from './Components/Sign';

const App = () => {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<LoginComponent />} />
        <Route path="/Sign" element={<SignUpComponent />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;


