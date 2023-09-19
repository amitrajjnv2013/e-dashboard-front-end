import React from 'react';
import {
    Link, useNavigate
} from 'react-router-dom';
const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/signup')
    }
    return (
        <div>
            <img
            alt='logo'
            className='logo'
             src='https://play-lh.googleusercontent.com/ACcO5GNgEhWmkkn1OOy35RSKPfZBQ907CKaFDY6cPvs3k98SDfWvgFQIghSbkTSq3Use=w240-h480-rw' />
            {
                auth ?
                    <>
                    <ul className="nav-ul">
                        <li><Link to="/">Products</Link></li>
                        <li><Link to="/add">Add Products</Link></li>
                        <li><Link to="/update"> Search&Update</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                        
                    </ul>
                    <ul className="nav-ul nav-right">
                        <li> <Link onClick={logout} to="/signup">Logout ({ JSON.parse(auth).name})</Link></li>
                    </ul>
                    </>
                    :
                    <ul className="nav-ul nav-right">
                        <li> <Link to="/signup">Sign Up</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
            }


        </div>
    )
}

export default Nav;