import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyViews from './pages/MyViews';
import About from './pages/About';
import Contact from './pages/Contact';
import Layout from './components/Layout';
import 'styles/Layout.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/myviews" element={<MyViews />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;