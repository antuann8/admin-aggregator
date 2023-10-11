import Cookies from 'js-cookie'
import axios from 'axios'
import { TOKEN } from './app.constants'

const URL = 'http://localhost:3000'

export const $axios = axios.create({
	baseURL: URL,
	headers: {
		'Content-Type': 'application/json',
		Authorization: `${Cookies.get(TOKEN)}`
	}
})
