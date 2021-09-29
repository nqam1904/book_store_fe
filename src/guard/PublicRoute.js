import { HeaderClient } from 'components/'
import { Route, Switch } from 'react-router-dom'
import routes from 'routes'

const PublicRoute = () => {
	return (
		<>
			<HeaderClient />
			<Switch>
				{routes.map((route, index) => {
					return (
						<Route
							key={index}
							exact={route.exact}
							path={route.path}
							component={route.component}
						/>
					)
				})}
			</Switch>
		</>
	)
}

export default PublicRoute
