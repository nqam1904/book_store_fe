import { Route, Redirect } from 'react-router-dom'

function PublicRoute({ children, isAuthenticated, ...rest }) {
	return (
		<Route
			{...rest}
			component={(props) =>
				isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
			}
		/>
	)
}

export default PublicRoute
