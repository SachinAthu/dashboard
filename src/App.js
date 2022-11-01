import { BrowserRouter, Routes, Route } from 'react-router-dom';

import classes from './App.module.scss';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Dashboard from './pages/dashboard/Dashboard';
import NotFound from './pages/not-found/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className={classes.app}>
        <nav className={classes.left}>
          <Sidebar />
        </nav>

        <div className={classes.right}>
          <header>
            <Header />
          </header>

          <div className={classes.content}>
            <div className='container'>
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/" element={<Dashboard />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

