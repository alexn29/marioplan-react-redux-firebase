import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './application/components/layout/Navbar';
import Dashboard from './application/components/dashboard/Dashboard';
import ProjectDetails from './application/components/projects/ProjectDetails';
import CreateProject from './application/components/projects/CreateProject';
import SignIn from './application/components/auth/SignIn';
import SignUp from './application/components/auth/SignUp';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Navbar />
				<Switch>
					<Route path="/" component={Dashboard} exact />
					<Route path="/project/:id" component={ProjectDetails} />
					<Route path="/create-project" component={CreateProject} />
					<Route path="/signin" component={SignIn} />
					<Route path="/signup" component={SignUp} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;