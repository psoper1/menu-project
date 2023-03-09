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

    if (view === 'Breakfast') {
        return (
            <>
                <Logo />
                <NameHeader />
                <NavBar setView={setView} />
                <Breakfast data={data} />
                <Footer />
            </>
        );
    } if (view === 'Lunch') {
        return (
            <>
                <Logo />
                <NameHeader />
                <NavBar setView={setView} />
                <Lunch data={data} />
                <Footer />
            </>
        );
    } if (view === 'Dinner') {
        return (
            <>
                <Logo />
                <NameHeader />
                <NavBar setView={setView} />
                <Dinner data={data} />
                <Footer />
            </>
        );
    } if (view === 'Drink') {
        return (
            <>
                <Logo />
                <NameHeader />
                <NavBar setView={setView} />
                <Drinks data={data} />
                <Footer />
            </>
        );
    } if (view === 'Appetizers') {
        return (
            <>
                <Logo />
                <NameHeader />
                <NavBar setView={setView} />
                <Appetizers data={data} />
                <Footer />
            </>
        );
    } if (view === 'Initial') {
        return (
            <>
                <Logo />
                <NameHeader />
                <NavBar setView={setView} />
                <InitialView view={view} />
                <Footer />
            </>
        )

    }

    return (
        <>
            <Logo />
            <NameHeader />
            <NavBar setView={setView} />
            <Breakfast data={data} />
            <hr></hr>
            <Lunch data={data} />
            <hr></hr>
            <Dinner data={data} />
            <hr></hr>
            <Drinks data={data} />
            <hr></hr>
            <Appetizers data={data} />
            <Footer />
        </>
    );
}

export default MenuList;