
function has_localStorage(key: string): boolean {
	return key in Object(localStorage);
}

export default {
	has_localStorage
}
