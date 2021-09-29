import { User, Book, Books, Document, Category } from 'pages'

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
