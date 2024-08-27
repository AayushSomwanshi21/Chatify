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

function App() {


  return (
    <MsgState>
      <Router>
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <div style={{ display: 'flex', flexGrow: 1 }}>
            <Home />
            <Routes>
              <Route path='/chats/:id' element={<ChatItem />} />
            </Routes>
          </div>
        </div>
      </Router>
    </MsgState>
  );
}

export default App;
