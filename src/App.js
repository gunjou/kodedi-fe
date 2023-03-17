import './App.css';
import { HashRouter, Route, Routes } from "react-router-dom";
import Diagnosis from './pages/Diagnosis';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Diagnosis />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
