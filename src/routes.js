import { User, Book, Books, Blog, Category } from 'pages'

const routes = [
	{
		path: '/admin/account',
		component: () => <User />,
		exact: false,
	},
	{
		path: '/admin/book',
		component: () => <Book />,
		exact: false,
	},
	{
		path: '/admin/category',
		component: () => <Category />,
		exact: false,
	},
	{
		path: '/books',
		component: () => <Books />,
		exact: false,
	},
	{
		path: '/blog',
		component: () => <Blog />,
		exact: false,
	},
]
export default routes
