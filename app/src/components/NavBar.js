function NavBar( {setView} ) {
    return (
        <nav>
            <div className="menu-icon">
                <i className="fa fa-bars fa-2x"></i>
            </div>
            <div className="logo">

            </div>
            <div className="menu">
                <ul>
                    
                    <li><button className='btn bg-transparent' onClick={() => setView('Breakfast')}>Breakfast</button></li>
                    <li><button className='btn bg-transparent' onClick={() => setView('Lunch')}>Lunch</button></li>
                    <li><button className='btn bg-transparent' onClick={() => setView('Dinner')}>Dinner</button></li>
                    <li><button className='btn bg-transparent' onClick={() => setView('Appetizers')}>Appetizers</button></li>
                    <li><button className='btn bg-transparent' onClick={() => setView('Potato')}>Full Menu</button></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;