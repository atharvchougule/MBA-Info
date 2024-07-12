import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Admin from './components/Admin';
import Index from './components/Index'
import Admin2 from './components/Admin2';
import { NamesProvider } from './components/NamesContext';


const App = () => {


  return (
    <Router>
    <NamesProvider>
      <div className="App">
        <Routes>
          <Route path="/admin2" element={<Admin2 />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/" element={<Index />} />
        </Routes>
      </div>
    </NamesProvider>
  </Router>
  );
};

export default App;
