import Analytics from '../components/screens/analytics/Analytics'
import Auth from '../components/screens/auth/Auth'
import Home from '../components/screens/home/Home'
import Refer from '../components/screens/refer/Refer'
import Register from '../components/screens/register/Register'
import Staff from '../components/screens/staff/Staff'
import Support from '../components/screens/support/Support'

export const routes = [
	{
		path: '/auth',
		component: Auth,
		isAuth: false
	},
	{
		path: '/',
		component: Home,
		isAuth: true
	},
	{
		path: '/staff',
		component: Staff,
		isAuth: true
	},
	{
		path: '/support',
		component: Support,
		isAuth: true
	},
	{
		path: '/register',
		component: Register,
		isAuth: true
	},
	{
		path: '/analytics',
		component: Analytics,
		isAuth: true
	},
	{
		path: '/refer',
		component: Refer,
		isAuth: true
	}
]
