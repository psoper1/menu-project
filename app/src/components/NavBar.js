import navpotato from '../imgs/navpotato.png';

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
                <li><button style={{ color: 'white' }} className='btn bg-transparent' onClick={() => setView('Initial')}>Home</button></li>
                    <li><button style={{ color: 'white' }} className='btn bg-transparent' onClick={() => setView('Breakfast')}>Breakfast</button></li>
                    <li><button style={{ color: 'white' }} className='btn bg-transparent' onClick={() => setView('Lunch')}>Lunch</button></li>
                    <li><button style={{ color: 'white' }} className='btn bg-transparent' onClick={() => setView('Dinner')}>Dinner</button></li>
                    <li><button style={{ color: 'white' }} className='btn bg-transparent' onClick={() => setView('Appetizers')}>Appetizers</button></li>
                </ul>
                <img className='potatoes potato-left' src={navpotato} alt="Cute Potato"/>
                <img className='potatoes potato-right'src={navpotato} alt="Cute Potato2"/>
            </div>
        </nav>
    );
}

export default NavBar;