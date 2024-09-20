import { Route, Routes } from 'react-router-dom';
import './App.css';
import MovieBrowser from './MovieBrowser';
import MovieDetails from './MovieDetails';

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<MovieBrowser />} />
        <Route path='/list' element={<MovieBrowser />} />
        <Route path='/details/:m_id' element={<MovieDetails />} />
      </Routes>


    </div>
  )
}

export default App;
