import { Header } from 'components'
import { Dashboard } from 'layouts'
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import routes from 'routes'

const Home = () => {
	const renderRouter = (routes) => {
		var result = null

		if (routes.length > 0) {
			result = routes.map((route, index) => {
				return (
					<Route
						path={route.path}
						key={index}
						exact={route.exact}
						component={route.component}
					/>
				)
			})
		}
		return <Switch>{result}</Switch>
	}
	return (
		<React.Fragment>
			<Dashboard>{renderRouter(routes)}</Dashboard>
		</React.Fragment>
	)
}
export default Home
