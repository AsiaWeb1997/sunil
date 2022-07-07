import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const Header = () => {
const location = useLocation();
const { pathname } = location;
const splitLocation = pathname.split("/");
console.log(splitLocation);
return (
    <header className='fixed-top'>
    <div className='container'>
    <nav className="navbar navbar-expand-lg navbar-dark">
        <Link className="navbar-brand" to="/">
            <img src='image\hone-logo-symbol.svg' className='img-fluid' width={35}></img>
            <span className='text-orange'>HONE</span>
            {/* <span className='text-black'>CARBON</span> */}
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="toggle navigation">
        <div id="nav-icon1">
            <span></span>
            <span></span>
            <span></span>
        </div>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <Link className="navbar-brand on-mobile-view" to="/">
            <img src='image\hone-logo-symbol.svg' className='img-fluid' width={35}></img>
            <span className='text-orange'>HONE</span>
            {/* <span className='text-black'>CARBON</span> */}
        </Link>
        <ul className="navbar-nav mr-auto">
          <li>
              <Link className={`nav-link scrollto ${splitLocation[1] === "" ? "active":""}`} to={'/'}>Home</Link>
              </li>
            <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Our products
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link  className={`nav-link scrollto ${splitLocation[1] === "hone-lab-red"? "active":""}`} to={'/hone-lab-red'}>Hone Lab Red</Link>
                    <Link  className={`nav-link scrollto ${splitLocation[1] === "unlocking"? "active":""}`} to={'/unlocking'}>Hone Lab Black</Link>
                    <Link  className={`nav-link scrollto ${splitLocation[1] === ""? "active":""}`} to={'/'}>Hone Carbon</Link>
                </div>
            </li>
            <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    About Us
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link  className={`nav-link scrollto ${splitLocation[1] === "about"? "active":""}`} to={'/about'}>About</Link>
                </div>
            </li>
            <li>
              <Link className={`nav-link scrollto ${splitLocation[1] === "unlocking"? "active":""}`} to={'/unlocking'}>Research and Design</Link>
            </li>
        </ul>
        <div className="navbar-nav ml-auto align-items-lg-center">
            <Link to="/" className="nav-link">Sign Up</Link>
            <Link to="/" className="btn btn-primary">Log In</Link>
        </div>
        </div>
    </nav>
    </div>
</header>
    );
}

export default Header;
