import { User, Book, Books, Blog, Category, BlogAdmin } from 'pages'

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
		path: '/admin/blog',
		component: () => <BlogAdmin />,
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
