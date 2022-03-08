import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import DogsList from '../DogsList/DogsList';
import CatsList from '../CatsList/CatsList';
import Favorites from '../Favorites/Favorites';
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
              <Route path="/dog" element={<DogsList />} />
              <Route path="/cat" element={<CatsList />} />
              <Route path="/favorites" element={<Favorites />} />
            </Routes>
            <div className='landing-header'>
              <h1>Finding the perfect furry animal is hard, but we can help you</h1>
              <h2>Fill out this form to see your perfect match</h2>
              <button>Get Started</button>
            </div>
            <div className="landing-buttons">
              <button className="pet-button"><Link to="/dog">Find a dog</Link></button>
              <button className="pet-button"><Link to ="/cat">Find a cat</Link></button>
            </div>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
