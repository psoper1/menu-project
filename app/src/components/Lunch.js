function Lunch( {data} ) {
    return (
        <ul className="menuList text-center">
          <h1 style={{ color: 'white' }} className='text-center menu-header'>Lunch</h1>
        {data.menu.filter((fast) => fast.category.includes('Lunch')).map(item => (
          <>
          
          <h4 style={{ color: 'white' }} className="card-title item-title">{item.title}</h4>
          <p style={{ color: 'white' }} className="card-text item-description">{item.description}</p>
          <p style={{ color: 'white' }} className="card-text">${item.price}</p>
          </>
        ))}
      </ul>
    );
  }

export default Lunch;