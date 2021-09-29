import { User, Book, Books, Document, Category } from 'pages'

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
		path: '/documents',
		component: () => <Document />,
		exact: false,
	},
]
export default routes
