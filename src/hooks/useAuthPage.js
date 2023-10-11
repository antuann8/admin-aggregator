import { useNavigate } from 'react-router-dom'
import { useAuth } from './useAuth'
import AuthService from '../services/auth.service'
import { useEffect, useMemo } from 'react'
import { useForm } from 'react-hook-form'

export const useAuthPage = () => {
	const { isAuth, setIsAuth } = useAuth()
	const navigate = useNavigate()

	useEffect(() => {
		if (isAuth) {
			navigate('/')
		}
	}, [isAuth])

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm({
		mode: 'onChange'
	})

	const onSubmit = async data => {
		// console.log('Form submitted with data:', data)
		try {
			const response = await AuthService.login(data.login, data.password)

			setIsAuth(true)
			reset()
		} catch (error) {
			console.error(error)
		}
	}

	return useMemo(
		() => ({
			register,
			handleSubmit,
			errors,
			onSubmit
		}),
		[errors]
	)
}
