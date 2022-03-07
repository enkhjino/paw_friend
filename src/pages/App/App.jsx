import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import Dog from '../Dog/Dog';
import Cat from '../Cat/Cat';
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
              <Route path="/dog" element={<Dog />} />
              <Route path="/cat" element={<Cat />} />
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
