import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import StudentsList from './pages/StudentsList';
import AddStudent from './pages/AddStudent';
import EditStudent from './pages/EditStudent';
import ViewStudent from './pages/ViewStudent';

function App() {
    return (
        <Router>
            <div className="App">
                    <Navbar />
                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/students" element={<StudentsList />} />
                    <Route path="/add-student" element={<AddStudent />} />
                    <Route path="/edit-student/:id" element={<EditStudent />} />
                    <Route path="/view-student/:id" element={<ViewStudent />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
