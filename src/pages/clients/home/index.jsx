import { HeaderClient, Footer } from 'components'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { getListBookAction } from 'redux/actions/bookAction'
import { loginDiscordAction } from 'redux/actions/loginAction'
import { userSelector } from 'redux/selectores/authSelector'
import { listBlogSelector } from 'redux/selectores/blogSelector'
import { listBookSelector } from 'redux/selectores/bookSelector'
import './index.scss'
import ItemBook from './itemBook'
const Home = () => {
	const dispatch = useDispatch()
	const listBook = useSelector(listBookSelector)
	const listBlog = useSelector(listBlogSelector)
	const userAuth = useSelector(userSelector)
	let query = useQuery()
	useEffect(() => {
		if (query.get('code') != null) {
			dispatch(loginDiscordAction(query.get('code')))
		}
	}, [query])
	useEffect(() => {
		dispatch(getListBookAction())
	}, [])

	const onFavorite = () => {}
	const onViewPdf = () => {}
	const showItemBook = (listBook) => {
		let result = null
		const data = listBook.slice(0, 4)
		result = data.map((item, index) => {
			return (
				<ItemBook
					key={index}
					images={item.images[0]?.key}
					name={item.title}
					author={item.author}
					onFavorite={onFavorite}
					onViewPdf={onViewPdf}
				/>
			)
		})
		return result
	}
	return (
		<>
			<HeaderClient />
			<section className="featured" id="books">
				<h4 className="title-book">
					<span>Featured Books</span>
				</h4>
				<div className="list-book">{showItemBook(listBook)}</div>
			</section>

			<section className="blog" id="blog">
				<h4 className="title-book">
					<span>Featured Blog</span>
				</h4>
				<div className="list-book">
					{listBlog?.map((item, index) => {
						return (
							<ItemBook
								key={index}
								images={item.images[0]?.key}
								name={item.title}
								author={item.author}
								onFavorite={onFavorite}
								onViewPdf={onViewPdf}
							/>
						)
					})}
				</div>
			</section>

			{/* <!-- footer section starts  --> */}

			<Footer />
		</>
	)
}

export default Home
function useQuery() {
	return new URLSearchParams(useLocation().search)
}
