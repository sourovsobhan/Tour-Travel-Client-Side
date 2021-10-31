import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Components/Shared/Header/Header';
import Home from './Components/Home/Home/Home';
import Footer from './Components/Shared/Footer/Footer';
import About from './Components/About/About';
import Login from './Components/Login/Login';
import AuthProvider from './context/AuthProvider';
import NotFound from './Components/NotFound/NotFound';
import Gallery from './Components/Gallery/Gallery';
import Booknow from './Components/Booknow/Booknow';
import Contact from './Components/Contact/Contact';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import MyOrder from './Components/MyOrder/MyOrder';

function App() {
	return (
		<div className="App">
			<AuthProvider>
				<BrowserRouter>
					<Header />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/home">
							<Home />
						</Route>
						<Route path="/about">
							<About />
						</Route>
						<Route path="/gallery">
							<Gallery />
						</Route>
						<Route path="/booknow">
							<Booknow />
						</Route>
						<Route path="/contact">
							<Contact />
						</Route>
						<PrivateRoute path="/myorder">
							<MyOrder />
						</PrivateRoute>
						<Route path="/login">
							<Login />
						</Route>

						<Route path="*" exact>
							<NotFound />
						</Route>
					</Switch>
					<Footer />
				</BrowserRouter>
			</AuthProvider>
		</div>
	);
}

export default App;
