import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Error from './pages/Error';
import Members from './pages/Members';
import Shop from './pages/Shop';
import SingleAlbumDetail from './pages/SingleAlbumDetail';
import Songs from './pages/Songs';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Sidebar />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/checkout">
						<Checkout />
					</Route>

					<Route path="/members">
						<Members />
					</Route>
					<Route path="/shop">
						<Shop />
					</Route>
					<Route path="/album/:id">
						<SingleAlbumDetail />
					</Route>
					<Route path="/songs">
						<Songs />
					</Route>
					<Route path="*">
						<Error />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
