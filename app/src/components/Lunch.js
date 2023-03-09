function Lunch( {data} ) {
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