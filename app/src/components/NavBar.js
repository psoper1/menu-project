function NavBar() {
    return (
        <nav>
            <div className="menu-icon">
                <i className="fa fa-bars fa-2x"></i>
            </div>
            <div className="logo">

            </div>
            <div className="menu">
                <ul>
                    <li><a href="#">Breakfast</a></li>
                    <li><a href="#">Lunch</a></li>
                    <li><a href="#">Dinner</a></li>
                    <li><a href="#">Full Menu</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;