import './App.css';
import MenuList from './components/MenuList';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({ menu: [] });
  const [view, setView] = useState('Initial');

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://www.jsonkeeper.com/b/3JFY',
      );

      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <>
      <MenuList data={data} view={view} setView={setView} />
    </>
  );
}

export default App;