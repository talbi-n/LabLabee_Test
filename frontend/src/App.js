import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddNewLab from './screens/AddNewLab.js';
function App() {
  return (
    <BrowserRouter>
      <div>
        <main>
          <Routes>
            <Route path="/" element={<AddNewLab />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
