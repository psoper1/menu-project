import Breakfast from "./Breakfast";

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
                    <button onClick={Breakfast}>Test</button>
                    <li><a id="breakfast" href="#">Breakfast</a></li>
                    <li><a id="lunch" href="#">Lunch</a></li>
                    <li><a id="dinner" href="#">Dinner</a></li>
                    <li><a id="fullmenu" href="#">Full Menu</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;