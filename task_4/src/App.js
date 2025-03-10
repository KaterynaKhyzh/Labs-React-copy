import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Post from './components/Post';
import './styles.css';

function App() {
  return (
    <Router>
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <Link to="/">
              <span>Untitled UI</span>
            </Link>
          </div>
          <div className="auth">
            <button className="login">Log in</button>
            <button className="signup">Sign up</button>
          </div>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:postId" element={<Post />} />
      </Routes>
    </Router>
  );
}

export default App;