import React from 'react'
import { HeaderClient } from 'components'
import { Route, Switch } from 'react-router-dom'
import routes from 'routes'

const Home = () => {
	const renderRouter = (routes) => {
		var result = null

		if (routes.length > 0) {
			result = routes.map((prop, key) => {
				return (
					<Route
						component={(props) => <prop.component {...props} />}
						key={key}
						path={prop.path}
					/>
				)
			})
		}
		console.log(routes)
		return <Switch>{result}</Switch>
	}
	return (
		<React.Fragment>
			<HeaderClient />
			{renderRouter(routes)}
		</React.Fragment>
	)
}

export default Home
