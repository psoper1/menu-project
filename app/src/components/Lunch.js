import { useState, useEffect } from 'react';
import axios from 'axios';

function Lunch() {
    const [data, setData] = useState({ menu: [] });
    

    
  
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
        <ul className="menuList text-center">
        {data.menu.filter((fast) => fast.category.includes('Lunch')).map(item => (
          <>
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.description}</p>
          <p className="card-text">{item.price}</p>
          </>
        ))}
      </ul>
    );
  }

export default Lunch;