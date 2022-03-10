import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import DogsListPage from '../DogsListPage/DogsListPage';
import CatsListPage from '../CatsListPage/CatsListPage';
import FavoritesPage from '../FavoritesPage/FavoritesPage';
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-service';
import { Link } from 'react-router-dom';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar className="Nav" user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/dogs" element={<DogsListPage />} />
              <Route path="/cats" element={<CatsListPage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
            </Routes>
            <div className='landing-header'>
              <h1>Finding the perfect furry animal is hard, but we can help you</h1>
              <h2>Fill out this form to see your perfect match</h2>
              <button>Get Started</button>
            </div>
            <div className="landing-buttons">
              <button className="pet-button"><Link to="/dogs">Find a dog</Link></button>
              <button className="pet-button"><Link to ="/cats">Find a cat</Link></button>
            </div>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
