import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StockOverviewPage from './pages/StockOverviewPage';
import StockDetailPage from './pages/StockDetailPage';
import { WatchListContextProvider } from './context/watchListContext';
import './App.css';

const App = () => {
  return (
    <main className='container'>
      <WatchListContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<StockOverviewPage />} />
            <Route path='/details/:symbol' element={<StockDetailPage />} />
          </Routes>
        </BrowserRouter>
      </WatchListContextProvider>
    </main>
  );
};

export default App;
