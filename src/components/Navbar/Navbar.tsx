import { GiHamburgerMenu, GiShoppingBag } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import icon from '../../images/icon.jpg';
import { UseGlobalContext } from '../../context';

const Navbar: React.FC = () => {
	const { openSidebar, totalAlbums } = UseGlobalContext();
	return (
		<nav>
			<div className="icon-container">
				<a href="https://www.rammstein.de/en/" target="_blank">
					<img src={icon} alt="" className="icon" />
				</a>
			</div>
			<ul>
				<Link to="/">
					<li>Welcome</li>
				</Link>
				<Link to="/shop">
					<li>Shop</li>
				</Link>
				<Link to="/members">
					<li>Members</li>
				</Link>
				<Link to="/songs">
					<li>Songs</li>
				</Link>
			</ul>
			<button className="hamburger" onClick={openSidebar}>
				<GiHamburgerMenu />
			</button>

			<div className="shopping-bag-cont">
				<Link to="/checkout">
					<GiShoppingBag className="shopping-bag" />
				</Link>
				<div className="amount-container">
					<p className="total-amount">{totalAlbums}</p>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
