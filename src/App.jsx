import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
// import { useDispatch } from 'react-redux';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// import './app.css';
import Home from './pages/Home';
import Login from './pages/Login';
// import Post from './pages/Post.jsx';
// import Header from './components/Header.jsx';
// import SinglePost from './pages/SinglePost.jsx';
// import { setUser } from './features/authSlice.js';
// import Dashboard from './pages/Dashboard.jsx';
// import PrivateRoute from './components/PrivateRoute.jsx';
// import NotFound from './pages/NotFound.jsx';
// import TagPosts from './pages/TagPosts.jsx';
// import ReactBootstrapNav from './components/ReactBootstrapNav.jsx';

const App = () => (
  <div className="app" id="outer-container">
    <div id="page-wrap">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  </div>
);
export default App;
