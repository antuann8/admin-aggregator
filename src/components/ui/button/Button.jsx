import { Button } from '@mantine/core'

import styles from './Button.module.scss'

export const ButtonUI = ({ children, clickHandler, size }) => {
	const buttonStyles = {
		width: '100%', // Устанавливаем ширину на 100%
		height: '40px' // Увеличиваем длину (высоту) кнопки на 60 пикселей
	}
	return (
		<Button style={buttonStyles} onClick={clickHandler}>
			{children}
		</Button>
	)
}

export default ButtonUI
