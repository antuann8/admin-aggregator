import {
	Image,
	Container,
	Title,
	Text,
	Button,
	SimpleGrid
} from '@mantine/core'
import classes from './NotFound.module.css'
import { useNavigate } from 'react-router-dom'

export const NotFound = () => {
	const navigate = useNavigate()

	const goBack = () => {
		navigate(-1) // Вернуться на предыдущую страницу
	}

	return (
		<Container className={classes.root}>
			<SimpleGrid spacing={{ base: 40, sm: 80 }} cols={{ base: 1, sm: 2 }}>
				<div>
					<Title className={classes.title}>Что-то пошло не так</Title>
					<Text c='dimmed' size='lg'>
						Страницу, которую вы открыли не существует. Возможно, вы перепутали
						URL адрес или не авторизованы. Если у Вас не получилось
						самостоятельно решить проблему, обратитесь в поддержку.
					</Text>
					<Button
						onClick={goBack}
						variant='outline'
						size='md'
						mt='xl'
						className={classes.control}
					>
						Вернуться обратно
					</Button>
				</div>
				<Image
					src='/public/images/not-found.svg'
					className={classes.desktopImage}
				/>
			</SimpleGrid>
		</Container>
	)
}

export default NotFound
