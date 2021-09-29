import { Switch, Route } from 'react-router-dom'
import PrivateRoute from 'guard/PrivateRoute'
import { Auth, Client, Admin, Books, Document } from 'pages'
import './App.css'
import { NotFound } from 'components'
import { ConnectedRouter } from 'connected-react-router'
import PropTypes from 'prop-types'
import StorageKeys from 'constants/Storage-key'
const App = ({ history }) => {
	const isAuthenticated = localStorage.getItem(StorageKeys.TOKEN)
	return (
		<ConnectedRouter history={history}>
			<Switch>
				<Route exact path="/" component={Client} />
				<Route path="/books" component={Books} />
				<Route path="/documents" component={Document} />
				<Route path="/login" component={Auth} />
				<PrivateRoute path="/admin" component={Admin} isAuthenticated={isAuthenticated} />
				<Route path="*">
					<NotFound />
				</Route>
			</Switch>
		</ConnectedRouter>
	)
}
App.propTypes = {
	history: PropTypes.object,
}
export default App
