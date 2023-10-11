import Cookies from 'js-cookie'
import { $axios } from '../api'
import { TOKEN } from '../app.constants'

class AuthService {
	async login(login, password) {
		try {
			const { data } = await $axios.get(
				`/auth?username=${login}&password=${password}`
			)

			if (data.token) Cookies.set(TOKEN, data.token)

			return data
		} catch (error) {
			throw new Error(error)
		}
	}
}

export default new AuthService()
