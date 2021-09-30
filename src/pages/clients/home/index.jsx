import { HeaderClient } from 'components'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListBookAction } from 'redux/actions/bookAction'
import { listBookSelector } from 'redux/selectores/bookSelector'
import './index.scss'
import ItemBook from './itemBook'
const Home = () => {
	const dispatch = useDispatch()
	const listBook = useSelector(listBookSelector)

	useEffect(() => {
		dispatch(getListBookAction())
	}, [])

	const onFavorite = () => {}
	const onViewPdf = () => {}

	return (
		<>
			<HeaderClient />
			<section className="featured" id="books">
				<h4 className="title-book">
					<span>featured books</span>
				</h4>
				<div className="list-book mt-10">
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
		</>
	)
}

export default Home
