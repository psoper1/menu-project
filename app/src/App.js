// import NameHeader from './components/NameHeader';
// import Logo from './components/Logo';
import './App.css';
// import NavBar from './components/NavBar';
import MenuList from './components/MenuList';
// import Breakfast from './components/Breakfast';
// import Footer from './components/Footer';
import { useState, useEffect } from 'react';
import axios from 'axios';
// import InitialView from './components/InitialView';

function App() {
    const [data, setData] = useState({ menu: [] });
    const [view, setView] = useState('Initial');

    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(
          'https://www.jsonkeeper.com/b/BKQ0',
        );
  
        setData(result.data);
      };
  
      fetchData();
    }, []);
  
    

    return (
      <>
      {/* <div className='wrapper'> */}
      {/* <div class="box box1"> */}
      <MenuList data={data} view={view} setView={setView}/>
      {/* </div> */}
      {/* </div> */}
      </>
    );
  }
  
  export default App;