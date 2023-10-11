import { useState } from 'react'
import { Group, Code } from '@mantine/core'
import { IconLogout } from '@tabler/icons-react'
import { MantineLogo } from '@mantine/ds'
import classes from './Sidebar.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { data } from './../menu.data.js'
import { useAuth } from '../../../hooks/useAuth'
import Cookies from 'js-cookie'
import { TOKEN } from '../../../app.constants'

const Sidebar = () => {
	const { setIsAuth } = useAuth()
	const navigate = useNavigate()

	const logoutHandler = () => {
		Cookies.remove(TOKEN)
		setIsAuth(false)
		navigate('/auth')
	}

	const [active, setActive] = useState('Billing')

	const links = data.map(item => (
		<Link
			className={classes.link}
			data-active={item.label === active || undefined}
			to={item.link}
			key={item.label}
			onClick={event => {
				setActive(item.label)
			}}
		>
			<item.icon className={classes.linkIcon} stroke={1.5} />
			<span>{item.label}</span>
		</Link>
	))

	return (
		<nav className={classes.navbar}>
			<div className={classes.navbarMain}>
				<Group className={classes.header} justify='space-between'>
					<b>Админка агрегатора поваров</b>
				</Group>
				{links}
			</div>

			<div className={classes.footer}>
				<a className={classes.link} onClick={logoutHandler}>
					<IconLogout className={classes.linkIcon} stroke={1.5} />
					<span>Выход из системы</span>
				</a>
			</div>
		</nav>
	)
}

export default Sidebar
