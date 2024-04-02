import logo from './logo.svg';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppTemplate from './components/AppTemplate';
import Explore from './screens/Explore';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<AppTemplate/>}>
          <Route path='' element = {<HomeScreen/>} />
          <Route path='explore/:showType' element = {<Explore/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
