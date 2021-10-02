import React from 'react'
import './index.scss'
const ButtonDiscord = () => {
	const onLoginDiscord = () => {
		window.location.href = `https://discord.com/api/oauth2/authorize?client_id=893506542073171968&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&response_type=code&scope=identify%20email`
	}
	return (
		<div className="rown middle-on-small center-on-small">
			<div className="column small-12 medium-6 large-4">
				<div onClick={onLoginDiscord} className="c-button c-button--gooey">
					discord
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

export default ButtonDiscord
