import { useState, useEffect } from 'react';
import axios from 'axios';

function Breakfast() {
    const [data, setData] = useState({ menu: [] });

    useEffect(() => {
        const fetchData = async () => {
        const result = await axios(
            
            'https://www.jsonkeeper.com/b/BKQ0'
        );
        console.log(result.data);
        setData(result.data);
        
        };
        fetchData();
    }, []);
    return (
        <ul>
            {/* {data.menu.map(bfast => 
                <li key={bfast.menu.id}>{bfast.menu.category.includes('Breakfast')}</li>
                )} */}
        </ul>
    );
}

export default Breakfast;