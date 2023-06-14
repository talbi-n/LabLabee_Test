import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddNewLab from './screens/AddNewLab.js';
import Home from './screens/Home';
import ViewOrUpdateLab from './screens/ViewOrUpdateLab';
function App() {
  return (
    <BrowserRouter>
      <div>
        <main>
          <Routes>
            <Route path="/AddNewLab" element={<AddNewLab />} />
            <Route path="/" element={<Home />} />
            <Route path="/viewOrUpdateLab/:id" element={<ViewOrUpdateLab />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
