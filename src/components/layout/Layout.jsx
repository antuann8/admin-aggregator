import { useCheckToken } from '../../hooks/useCheckToken'
import styles from './Layout.module.scss'
import Sidebar from './sidebar/Sidebar'

const Layout = ({ children }) => {
	useCheckToken()

	return (
		<div className={styles.container}>
			<div className={styles.sidebar}>
				<Sidebar />
			</div>
			<div className={styles.children}>{children}</div>
		</div>
	)
}
export default Layout
