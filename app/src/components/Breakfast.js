function Breakfast( {data} ) {
    return (
      <ul className="menuList text-center">
        {data.menu.filter((fast) => fast.category.includes('Breakfast')).map(item => (
          <>
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.description}</p>
          <p className="card-text">{item.price}</p>
          </>
        ))}
      </ul>
    );
  }

export default Breakfast;

/* <div className="row">
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.description}</p>
      </div>
    </div>
  </div>
  </div> */


  // <h5 className="card-title">{item.title}</h5>
  //         <p className="card-text">{item.description}</p>
  //         <p className="card-text">{item.price}</p>

            // <li key={item.id}>
          //   {item.title}
          // </li>


              // const [data, setData] = useState({ menu: [] });
    

    
  
    // useEffect(() => {
    //   const fetchData = async () => {
    //     const result = await axios(
    //       'https://www.jsonkeeper.com/b/BKQ0',
    //     );
  
    //     setData(result.data);
    //   };
  
    //   fetchData();
    // }, []);