import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div class="app">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
