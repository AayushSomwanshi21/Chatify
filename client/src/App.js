import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import React, { useEffect, useContext } from "react";
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import MsgState from './context/MsgState';
import ChatItem from './components/ChatItem';
import MsgContext from "./context/MsgContext";
import Login from './components/Login';
import { AuthState } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
function App() {


  return (
    <AuthState>
      <MsgState>

        <Router>
          <div style={{ display: 'flex', minHeight: '100vh' }}>
            <PrivateRoute>
              <Sidebar />
            </PrivateRoute>

            <div style={{ display: 'flex', flexGrow: 1 }}>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/chats" element={
                  <PrivateRoute><Home /></PrivateRoute>
                }
                />
                <Route path="/chats/:id" element={
                  <PrivateRoute>
                    <div style={{ display: 'flex', flexGrow: 1 }}>
                      <Home />
                      <ChatItem />
                    </div>
                  </PrivateRoute>

                } />
              </Routes>
            </div>
          </div>
        </Router>
      </MsgState>
    </AuthState>

  );
}

export default App;
