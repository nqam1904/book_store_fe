import React from 'react'
import { HeaderClient, CardItem } from 'components'

import { Breadcrumb, Card, Button } from 'react-bootstrap'
import FlipMove from 'react-flip-move'
import Search from './Search'
import './index.scss'
const data = [
	{
		images: [
			{
				id: 1,
				key: '1631985539757.jpg',
				size: 21402,
				type: 'image/png',
				name: '219254490_784008618946015_7154910683507869990_n.png',
				createDate: '2021-09-18T16:28:36.781Z',
				writeDate: '2021-09-18T16:28:36.781Z',
			},
		],
		categories: [
			{
				id: 1,
				name: 'Java',
				createDate: '2021-09-13T17:08:10.289Z',
				writeDate: '2021-09-13T17:14:18.015Z',
			},
		],
		id: 11,
		title: 'Java Clear Code',
		author: 'aaa',
		createDate: '2021-09-19T10:53:00.227Z',
		writeDate: '2021-09-19T10:53:00.227Z',
	},
	{
		images: [
			{
				id: 1,
				key: '1631985539757.jpg',
				size: 21402,
				type: 'image/png',
				name: '219254490_784008618946015_7154910683507869990_n.png',
				createDate: '2021-09-18T16:28:36.781Z',
				writeDate: '2021-09-18T16:28:36.781Z',
			},
		],
		categories: [
			{
				id: 1,
				name: 'Java',
				createDate: '2021-09-13T17:08:10.289Z',
				writeDate: '2021-09-13T17:14:18.015Z',
			},
		],
		id: 12,
		title: 'Java Clear Code',
		author: 'aaa',
		createDate: '2021-09-19T10:53:00.227Z',
		writeDate: '2021-09-19T10:53:00.227Z',
	},
	{
		images: [
			{
				id: 1,
				key: '1631985539757.jpg',
				size: 21402,
				type: 'image/png',
				name: '219254490_784008618946015_7154910683507869990_n.png',
				createDate: '2021-09-18T16:28:36.781Z',
				writeDate: '2021-09-18T16:28:36.781Z',
			},
		],
		categories: [
			{
				id: 1,
				name: 'Java',
				createDate: '2021-09-13T17:08:10.289Z',
				writeDate: '2021-09-13T17:14:18.015Z',
			},
		],
		id: 15,
		title: 'Java Clear Code',
		author: 'aaa',
		createDate: '2021-09-19T10:53:00.227Z',
		writeDate: '2021-09-19T10:53:00.227Z',
	},
	{
		images: [
			{
				id: 1,
				key: '1631985539757.jpg',
				size: 21402,
				type: 'image/png',
				name: '219254490_784008618946015_7154910683507869990_n.png',
				createDate: '2021-09-18T16:28:36.781Z',
				writeDate: '2021-09-18T16:28:36.781Z',
			},
		],
		categories: [
			{
				id: 1,
				name: 'Java',
				createDate: '2021-09-13T17:08:10.289Z',
				writeDate: '2021-09-13T17:14:18.015Z',
			},
		],
		id: 13,
		title: 'Java Clear Code',
		author: 'aaa',
		createDate: '2021-09-19T10:53:00.227Z',
		writeDate: '2021-09-19T10:53:00.227Z',
	},
]
const Books = () => {
	const listBook = data.map((item) => {
		return (
			<FlipMove
				duration={300}
				staggerDelayBy={150}
				appearAnimation="accordionVertical"
				enterAnimation="fade"
				leaveAnimation="fade"
				key={item.id}>
				<CardItem title={item.title} text={item.author} image={item.images[0].key} />
			</FlipMove>
		)
	})
	return (
		<>
			<HeaderClient />
			<div className="container">
				<br />
				{/* Breadcrumb */}
				<Breadcrumb>
					<Breadcrumb.Item>Home</Breadcrumb.Item>
					<Breadcrumb.Item>Books</Breadcrumb.Item>
				</Breadcrumb>

				<Search />

				{/*List Book */}
				<br />
				<div className="books-list">{listBook}</div>
			</div>
		</>
	)
}

export default Books
