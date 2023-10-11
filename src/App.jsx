import Layout from './components/layout/Layout'
function App() {
	const [count, setCount] = useState(0)

	return (
		<Layout>
			<div>Upper me sidebar</div>
		</Layout>
	)
}

export default App
import { useState } from 'react'
