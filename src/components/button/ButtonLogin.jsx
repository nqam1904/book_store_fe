import React from 'react'
import './index.scss'
const ButtonLogin = ({ title = 'login', onClick }) => {
	return (
		<div className="rown middle-on-small center-on-small">
			<div className="column small-12 medium-6 large-4">
				<div onClick={onClick} className="c-button c-button--gooey">
					{title}
					<div className="c-button__blobs">
						<div></div>
						<div></div>
						<div></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ButtonLogin
