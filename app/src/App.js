import NameHeader from './components/NameHeader';
import Logo from './components/Logo';
import './App.css';
import NavBar from './components/NavBar';
import MenuList from './components/MenuList';
import Breakfast from './components/Breakfast';

function App() {
    return (
      <>
      <Logo />
      <NameHeader />
      <NavBar breakfast={Breakfast}/>
      <MenuList />
      </>
    );
  }
  
  export default App;