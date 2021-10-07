import { User, Book, Books, Blog, Category, BlogAdmin, Users } from 'pages'

const routes = [
	{
		path: '/admin/account',
		component: () => <User />,
		exact: false,
		name: 'Account',
	},
	{
		path: '/admin/book',
		component: () => <Book />,
		exact: false,
		name: 'Book',
	},
	{
		path: '/admin/category',
		component: () => <Category />,
		exact: false,
		name: 'Category',
	},
	{
		path: '/admin/blog',
		component: () => <BlogAdmin />,
		exact: false,
		name: 'Blog',
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
	{
		path: '/users',
		component: () => <Users />,
		exact: false,
	},
]
export default routes
