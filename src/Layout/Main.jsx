
import { Outlet } from 'react-router-dom';
import Navbar from '../shear/navbar/Navbar';
import Footer from '../shear/footer/Footer';

const Main = () => {
    return (
        <div>
            
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;