import { HashRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages';


function App() {
  return (
    <div className="overflow-hidden mx-auto max-w-[1400px]">
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </HashRouter>
    </div>
  );
}

export default App;
