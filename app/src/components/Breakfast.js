import { useState, useEffect } from 'react';
import axios from 'axios';

function Breakfast() {
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
      <ul>
        {data.menu.filter((fast) => fast.category.includes('Breakfast')).map(item => (
          <li key={item.id}>
            {item.title}
          </li>
        ))}
      </ul>
    );
  }

export default Breakfast;












// function Breakfast() {
//     const [data, setData] = useState({ menu: [] });

//     useEffect(() => {
//         const fetchData = async () => {
//         const result = await axios(
            
//             'https://www.jsonkeeper.com/b/BKQ0'
//         );
//         console.log(result.data);
//         setData(result.data);
        
//         };
//         fetchData();
//     }, []);
//     return (
//         <ul>{data.menu.filter((fast) => fast.category.includes('Breakfast')).map(item => (
//             {data.menu.filter((item) => item.menu.category.includes('Breakfast')).map(bfast => (
//                 <li>{bfast.menu.title}</li>
//                 ))}
//         </ul>
//     );
// }