import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import DogsListPage from '../DogsListPage/DogsListPage';
import CatsListPage from '../CatsListPage/CatsListPage';
import CatDetailPage from '../CatDetailPage/CatDetailPage';
import FavoritesPage from '../FavoritesPage/FavoritesPage';
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-service';
import { Link } from 'react-router-dom';
import * as petsAPI from '../../utilities/pets-api';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [cats, setCats] = useState([]);
  const [dogs, setDogs] = useState([]);

  useEffect(function () {
    async function getDogs() {
      const dogs = await petsAPI.getAllDogs()
      setDogs(dogs);
    }
    getDogs();
  }, []);

  useEffect(function () {
    async function getCats() {
      const cats = await petsAPI.getAllCats()
      setCats(cats);
    }
    getCats();
  }, []);

  return (
    <main className="App">
      { user ?
          <>
            <NavBar className="Nav" user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/dogs" element={<DogsListPage dogs={dogs} setDogs={setDogs} />} />
              <Route path="/cats" element={<CatsListPage cats={cats} setCats={setCats} />} />
              <Route path="/cats/:catName" element={<CatDetailPage cats={cats} setCats={setCats} />} />
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
