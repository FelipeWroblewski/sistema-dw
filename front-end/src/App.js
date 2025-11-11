import { Routes, Route } from 'react-router-dom';
import RightSide from './login/components/RightSide';
import Homepage from './homepage/Homepage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<RightSide />} />
      <Route path="/homepage" element={<Homepage />} />
    </Routes>
  );
}

export default App;
