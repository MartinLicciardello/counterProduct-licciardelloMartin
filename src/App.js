import './App.css';


//Reac router dom

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//Components

import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
//Views

import Home from './views/Home/Home';
import About from './views/About/About';
import Contact from './views/Contact/Contact';
import CharacterDetail from './views/CharacterDetail/CharacterDetail';




function App() {
  return (

    <Router>
      <div className="App">
        <Header/>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/detail/:id' element={<CharacterDetail/>}></Route>


        </Routes>

      </div>
    </Router>
  );
}

export default App;
