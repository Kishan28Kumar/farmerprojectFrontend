import Nav from './Nav';
import Home from './Home';
import './index.css';

function Farmer(){
    return (
        <>
            <div className="main-farmer-page">
                <Nav />
                <Home />
            </div>
        </>
    )
}

export default Farmer;