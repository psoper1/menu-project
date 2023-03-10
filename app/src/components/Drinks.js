function Drinks( {data} ) {
    return (
        <ul className="menuList text-center">
          <h1 className='text-center menu-header fontcolor'>All Day Drink Menu!</h1>
        {data.menu.filter((fast) => fast.category.includes('Drink')).map(item => (
          <div key={item.id}>
          <h4 key={item.title} className="card-title item-title fontcolor">{item.title}</h4>
          <p key={item.description} className="card-text item-description fontcolor">{item.description}</p>
          <p className="card-text fontcolor">${item.price}</p>
          </div>
        ))}
      </ul>
    );
  }

export default Drinks;