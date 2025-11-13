import { Routes, Route } from 'react-router-dom';
import Login from './login/Login';
import Homepage from './homepage/Homepage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Homepage" element={<Homepage />} />
    </Routes>
  );
}

export default App;
