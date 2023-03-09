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

function MenuList({ data, view, setView }) {

    return (
        <>
             <div className='container main-container'>
                <Logo />
                <NameHeader />
                <NavBar setView={setView} />
                {view === 'Initial' && <InitialView view={view}/>}
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



/* <>
<Logo />
<NameHeader />
<NavBar setView={setView} />
<Appetizers data={data} />
<hr></hr>
<Breakfast data={data} />
<hr></hr>
<Lunch data={data} />
<hr></hr>
<Dinner data={data} />
<hr></hr>
<Drinks data={data} />
<hr></hr>
<Footer />
</> */




// if (view === 'Breakfast') {
    //     return (
    //         <>
    //             <Logo />
    //             <NameHeader />
    //             <NavBar setView={setView} />
    //             <Breakfast data={data} />
    //             <Footer />
    //         </>
    //     );
    //  if (view === 'Lunch') {
    //     return (
    //         <>
    //             <Logo />
    //             <NameHeader />
    //             <NavBar setView={setView} />
    //             <Lunch data={data} />
    //             <Footer />
    //         </>
    //     );
    // } if (view === 'Dinner') {
    //     return (
    //             <>
    //             <Logo />
    //             <NameHeader />
    //             <NavBar setView={setView} />
    //             <Dinner data={data} />
    //             <Footer />
    //             </>
    //     );
    // } if (view === 'Drink') {
    //     return (
    //         <>
    //             <Logo />
    //             <NameHeader />
    //             <NavBar setView={setView} />
    //             <Drinks data={data} />
    //             <Footer />
    //         </>
    //     );
    // } if (view === 'Appetizers') {
    //     return (
    //         <>
    //             <Logo />
    //             <NameHeader />
    //             <NavBar setView={setView} />
    //             <Appetizers data={data} />
    //             <Footer />
    //         </>
    //     );
    // }
    // } if (view === 'Initial') {
    //     return (
    //         <>
    //         <div className='container main-container'>
    //             <Logo />
    //             <NameHeader />
    //             <NavBar setView={setView} />
    //             <InitialView view={view} />
    //             <div className="overlay"></div>
    //             </div>
    //             <Footer />
    //         </>
    //     )

    // }