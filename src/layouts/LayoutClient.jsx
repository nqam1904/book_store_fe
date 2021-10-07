import { HeaderClient, Footer } from 'components'
import React from 'react'

const LayoutClient = (props) => {
	return (
		<>
			<HeaderClient />
			{props?.children}
			<Footer />
		</>
	)
}
export default LayoutClient
