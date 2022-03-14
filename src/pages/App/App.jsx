import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
import DogsListPage from '../DogsListPage/DogsListPage';
import CatsListPage from '../CatsListPage/CatsListPage';
import CatDetailPage from '../CatDetailPage/CatDetailPage';
import DogDetailPage from '../DogDetailPage/DogDetailPage';
import FavoritesPage from '../FavoritesPage/FavoritesPage';
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-service';
// import { Link } from 'react-router-dom';
import * as petsAPI from '../../utilities/pets-api';
import GetStartedForm from '../../components/GetStartedForm/GetStartedForm';
import PetMatches from '../PetMatches/PetMatches';

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
              <Route path="/" element={<HomePage />} />
              <Route path="/dogs" element={<DogsListPage dogs={dogs} setDogs={setDogs} />} />
              <Route path="/cats" element={<CatsListPage cats={cats} setCats={setCats} />} />
              <Route path="/cats/:catName" element={<CatDetailPage cats={cats} setCats={setCats} />} />
              <Route path="/dogs/:dogName" element={<DogDetailPage dogs={dogs} setDogs={setDogs} />} />
              <Route path="/favorites" element={<FavoritesPage />} />
              <Route path="/getStarted" element={<PetMatches setCats={setCats} setDogs={setDogs}/>}  />
            </Routes>
            
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
