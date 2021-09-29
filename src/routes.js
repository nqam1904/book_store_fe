import { User, Book } from 'pages'

const routes = [
	{
		path: '/admin/account',
		component: () => <User />,
		exact: true,
	},
	{
		path: '/admin/book',
		component: () => <Book />,
		exact: true,
	},
]
export default routes
