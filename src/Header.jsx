import { Link } from "react-router-dom";

function Header() {

    return (
        <>
            <div className='Navbar'>
                <Link to={'/'}><img src="./images/logo.jpeg" className='logo' /></Link>
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                    <li><Link to={'/jobs'}>Careers</Link></li>
                    <li><Link to={'/contact'}>Contact Us</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Header