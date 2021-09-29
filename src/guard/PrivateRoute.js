import { Route, Redirect } from 'react-router-dom'

function PrivateRoute({ component: Component, children, isAuthenticated, ...rest }) {
	return (
		<Route
			{...rest}
			component={(props) =>
				isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
			}
		/>
	)
}

export default PrivateRoute
