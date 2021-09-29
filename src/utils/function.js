function validateEmail(email) {
	// eslint-disable-next-line
	let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
	if (email.match(regexEmail)) {
		return true
	} else {
		return false
	}
}
const formatSubstring = (value) => {
	if (value != null) {
		if (value.length > 20) {
			return value.substring(0, 20) + '...'
		} else {
			return value
		}
	} else return ''
}
export { validateEmail, formatSubstring }
