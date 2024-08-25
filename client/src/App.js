import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Navbar_Head from './components/Navbar_Head';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import MsgState from './context/MsgState';

function App() {
  return (
    <MsgState>
      <Router>
        <Sidebar />
        <Routes>
          <Route path='/chats' element={<Home />} />
        </Routes>
      </Router >
    </MsgState>

  );
}

export default App;
