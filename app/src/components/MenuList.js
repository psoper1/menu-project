import Breakfast from "./Breakfast";
import Lunch from './Lunch';
import Dinner from './Dinner';
import Drinks from './Drinks';
import Appetizers from './Appetizers';
import Logo from './Logo';
import NameHeader from './NameHeader';
import NavBar from './NavBar';
import Footer from './Footer';
import InitialView from "./InitialView";
import PotatoImg from "./PotatoImg";

function MenuList({ data, view, setView }) {

    return (
        <>
             <div className='container main-container'>
                <Logo />
                <NameHeader />
                <NavBar setView={setView} />
                {view === 'Initial' && <InitialView view={view}/>}
                <PotatoImg />            
                {view === 'Breakfast' && <Breakfast data={data} />}
                {view === 'Lunch' && <Lunch data={data} />}
                {view === 'Dinner' && <Dinner data={data} />}
                {view === 'Drink' && <Drinks data={data} />}
                {view === 'Appetizers' && <Appetizers data={data} />}
                <div className="overlay"></div>
                </div>
                <Footer />
        </>
    );
}

export default MenuList;