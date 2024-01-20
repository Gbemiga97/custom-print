import { HashRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages';
import { Header } from './sections';


function App() {
  return (
    <div className="overflow-hidden mx-auto max-w-[1400px]">
    <HashRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <div className='h-[40000px]' />
    </HashRouter>
    </div>
  );
}

export default App;
