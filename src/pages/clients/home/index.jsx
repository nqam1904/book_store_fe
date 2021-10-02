import { HeaderClient } from 'components'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListBookAction } from 'redux/actions/bookAction'
import { listBookSelector } from 'redux/selectores/bookSelector'
import './index.scss'
import ItemBook from './itemBook'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
const Home = () => {
	const dispatch = useDispatch()
	const listBook = useSelector(listBookSelector)
	const [code, setCode] = useState('')

	let query = useQuery()

	useEffect(() => {
		setCode(query)
		dispatch(getListBookAction())
	}, [])
	useEffect(() => {
		console.log(code, 'code')
	}, [code])
	const onFavorite = () => {}
	const onViewPdf = () => {}

	return (
		<>
			<HeaderClient />
			<section className="featured" id="books">
				<h4 className="title-book">
					<span>Featured Books</span>
				</h4>
				<div className="list-book">
					{listBook.map((item, index) => {
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

			<section className="blog" id="blog">
				<h4 className="title-book">
					<span>Featured Blog</span>
				</h4>
				<div className="list-book">
					{listBook.map((item, index) => {
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

			<section className="footer">
				<div className="box-container">
					<div className="box">
						<h3>quick links</h3>
						<a href="#">
							<i className="fas fa-arrow-right"></i> home
						</a>
						<a href="#">
							<i className="fas fa-arrow-right"></i> featured
						</a>
						<a href="#">
							<i className="fas fa-arrow-right"></i> arrivals
						</a>
						<a href="#">
							<i className="fas fa-arrow-right"></i> reviews
						</a>
						<a href="#">
							<i className="fas fa-arrow-right"></i> blogs
						</a>
					</div>

					<div className="box">
						<h3>extra links</h3>
						<a href="#">
							<i className="fas fa-arrow-right"></i> account info
						</a>
						<a href="#">
							<i className="fas fa-arrow-right"></i> ordered items
						</a>
						<a href="#">
							<i className="fas fa-arrow-right"></i> privacy policy
						</a>
						<a href="#">
							<i className="fas fa-arrow-right"></i> payment method
						</a>
						<a href="#">
							<i className="fas fa-arrow-right"></i> our serivces
						</a>
					</div>

					<div className="box">
						<h3>contact info</h3>
						<a href="tel:0339190498">
							<i className="fas fa-phone"></i> +84-339-1904-98
						</a>
						<a href="#">
							<i className="fas fa-phone"></i> +111-222-3333
						</a>
						<a href="mailto: nghiemminh1904@gmail.com">
							<i className="fas fa-envelope"></i> nghiemminh1904@gmail.com
						</a>
					</div>
				</div>

				<div className="share">
					<a href="#" className="fab fa-facebook-f"></a>
					<a
						href="https://discord.gg/rt7myeRkjd"
						target="_blank"
						className="fab fa-discord"></a>
				</div>

				<div className="credit">
					created by <span>mr. web designer</span> | all rights reserved!
				</div>
			</section>
		</>
	)
}

export default Home
function useQuery() {
	return new URLSearchParams(useLocation().search)
}
