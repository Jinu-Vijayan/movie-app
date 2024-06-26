import logo from './logo.svg';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppTemplate from './components/AppTemplate';
import Explore from './screens/Explore';
import MovieDetails from './screens/MovieDetails';
import Search from './screens/Search';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<AppTemplate/>}>
          <Route path='' element = {<HomeScreen/>} />
          <Route path='explore/:showType' element = {<Explore/>} />
          <Route path='movie/:id' element = {<MovieDetails/>}/>
          <Route path='tv/:id' element = {<MovieDetails/>}/>
          <Route path='search/:query' element = {<Search/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
