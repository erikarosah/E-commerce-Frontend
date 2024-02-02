import axios, { AxiosError } from 'axios'

const controller = new AbortController()

export const instanceAxios = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
	headers: {
		Accept: 'application/json',
	},
	signal: controller.signal,
})

instanceAxios.interceptors.response.use(
	function (response) {
		return response
	},

	function (error) {
		if (error instanceof AxiosError) {
			if (error.response?.status === 500) {
				console.log(error.response.data.message)
				throw new Error('Server error')
			}

			if (error.response?.status === 404) {
				console.log(error.response.data.message)
				location.reload()
				throw new Error('Client error')
			}

			return Promise.reject(error)
		}
	},
)