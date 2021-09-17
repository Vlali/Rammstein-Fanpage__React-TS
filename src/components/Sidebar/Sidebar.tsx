import React from 'react';
import { UseGlobalContext } from '../../context';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const Sidebar = () => {
	const { isSidebarOpen, closeSidebar } = UseGlobalContext();
	return (
		<aside
			className={`${
				isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper '
			}`}
		>
			<div className="sidebar">
				<button className="close-btn" onClick={closeSidebar}>
					<AiOutlineClose />
				</button>

				<ul className="side-bar-links">
					<Link to="/" onClick={closeSidebar}>
						<li>Welcome</li>
					</Link>
					<Link to="/shop" onClick={closeSidebar}>
						<li>Shop</li>
					</Link>
					<Link to="/members" onClick={closeSidebar}>
						<li>Members</li>
					</Link>
					<Link to="/songs" onClick={closeSidebar}>
						<li>Songs</li>
					</Link>
					<Link to="/checkout" onClick={closeSidebar}>
						<li>Checkout</li>
					</Link>
				</ul>
			</div>
		</aside>
	);
};

export default Sidebar;
