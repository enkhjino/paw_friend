import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import DogsList from '../DogsList/DogsList';
import CatsList from '../CatsList/CatsList';
import Favorites from '../Favorites/Favorites';
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-service';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/dog" element={<DogsList />} />
              <Route path="/cat" element={<CatsList />} />
              <Route path="/favorites" element={<Favorites />} />
            </Routes>
            <div className='backgroundHome'>Finding the perfect furry animal is hard, but we can help you</div>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
