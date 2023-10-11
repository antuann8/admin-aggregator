import { useForm } from 'react-hook-form'
import { ButtonUI } from '../../ui/button/Button'
import Field from '../../ui/field/Field'
import Loader from '../../ui/loader/Loader'
import { useEffect, useState } from 'react'
// import styles from './Auth.module.scss'
import { useQuery } from '@tanstack/react-query'
import AuthService from '../../../services/auth.service'
import {
	TextInput,
	PasswordInput,
	Checkbox,
	Anchor,
	Paper,
	Title,
	Text,
	Container,
	Group,
	Button,
	Notification
} from '@mantine/core'
import classes from './Auth.module.css'
import { useNavigate } from 'react-router-dom'
import { useAuthPage } from '../../../hooks/useAuthPage'

export const Auth = () => {
	const { register, handleSubmit, errors, onSubmit } = useAuthPage()

	return (
		<Container size={420} my={40}>
			<Title ta='center' className={classes.title}>
				Авторизируйся!
			</Title>

			<Paper withBorder shadow='md' p={30} mt={30} radius='md'>
				<form onSubmit={handleSubmit(onSubmit)}>
					<TextInput
						label='Логин'
						placeholder='Ваш логин'
						type='text'
						{...register('login', { required: true })}
					/>
					{errors.login && <Notification title='Введите логин' color='red' />}
					<PasswordInput
						label='Пароль'
						placeholder='Ваш пароль'
						mt='md'
						{...register('password', { required: true })}
					/>
					{errors.password && (
						<Notification title='Введите пароль' color='red' />
					)}
					<Button fullWidth mt='xl' type='submit'>
						Войти
					</Button>
				</form>
			</Paper>
		</Container>
	)
}

export default Auth
