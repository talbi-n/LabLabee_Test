import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddNewLab from './screens/AddNewLab.js';
import Home from './screens/Home';
function App() {
  return (
    <BrowserRouter>
      <div>
        <main>
          <Routes>
            <Route path="/AddNewLab" element={<AddNewLab />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
