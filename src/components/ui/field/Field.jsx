import styles from './Field.module.scss'
import { Input } from '@mantine/core'

export const Field = ({ register, name, options, error, ...rest }) => {
	// return (
	// 	<div>
	// 		<input {...register(name, options)} {...rest} className={styles.input} />
	// 		{error && <div className={styles.error}>{error}</div>}
	// 	</div>
	// )
	return <Input label='Ваше имя' error='Здесь возникла ошибка' />
}

export default Field
