import { LayoutClient } from 'layouts'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { getListBookAction } from 'redux/actions/bookAction'
import { loginDiscordAction } from 'redux/actions/loginAction'
import './index.scss'
const Home = () => {
	const dispatch = useDispatch()
	const [code, setCode] = useState('')
	let query = useQuery()
	useEffect(() => {
		if (query.get('code') != null) {
			setCode(query.get('code'))
			dispatch(loginDiscordAction(code))
		}
	}, [code])
	useEffect(() => {
		dispatch(getListBookAction())
	}, [])

	return (
		<LayoutClient>
			<div className="container">
				<h3 className="text-center mt-10">Find the Best Programming Courses & Tutorials</h3>
			</div>
		</LayoutClient>
	)
}

export default Home
function useQuery() {
	return new URLSearchParams(useLocation().search)
}
