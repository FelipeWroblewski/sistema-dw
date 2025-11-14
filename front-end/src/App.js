import { Routes, Route } from 'react-router-dom';
import Login from './login/Login';
import Homepage from './homepage/Homepage';
import ApiSchema from './schemas/ApiSchema';
import CommercialSchema from './schemas/CommercialSchema';
import EventsSchema from './schemas/EventsSchema';
import LiveSchema from './schemas/LiveSchema';
import MarftSchema from './schemas/MarftSchema';
import PpcpSchema from './schemas/PpcpSchema';
import RhSchema from './schemas/RhSchema';
import Rh_sciSchema from './schemas/Rh_sciSchema';
import StockSchema from './schemas/StockSchema';
import SuppliesSchema from './schemas/SuppliesSchema';
import SustainabilitySchema from './schemas/SustainabilitySchema';
import TiSchema from './schemas/TiSchema';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Homepage" element={<Homepage />} />
      <Route path="/Api" element={<ApiSchema />} />
      <Route path="/Comercial" element={<CommercialSchema />} />
      <Route path="/Eventos" element={<EventsSchema />} />
      <Route path="/Live" element={<LiveSchema />} />
      <Route path="/Marft" element={<MarftSchema />} />
      <Route path="/Rh" element={<RhSchema />} />
      <Route path="/Ppcp" element={<PpcpSchema />} />
      <Route path="/Rh_sci" element={<Rh_sciSchema />} />
      <Route path="/Estoque" element={<StockSchema />} />
      <Route path="/Suprimentos" element={<SuppliesSchema />} />
      <Route path="/Sustentabilidade" element={<SustainabilitySchema />} />
      <Route path="/Ti" element={<TiSchema />} />
    </Routes>
  );
}

export default App;
