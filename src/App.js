import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import TodoPage from './pages/TodoPage';
import CounterPage from './pages/CounterPage';

const AboutPageLazy = React.lazy(() => import('./pages/AboutPage'));

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <nav>
            <Link to="/" style={{ margin: '1rem' }}>Home</Link>
            <Link to="/about" style={{ margin: '1rem' }}>About</Link>
            <Link to="/counter" style={{ margin: '1rem' }}>Counter</Link>
          </nav>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<TodoPage />} />
              <Route path="/about" element={<AboutPageLazy />} />
              <Route path="/counter" element={<CounterPage />} />
            </Routes>
          </Suspense>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;