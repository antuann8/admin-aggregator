import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/assets/styles/index.scss'
import Router from './routes/Routes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'
import '@mantine/dropzone/styles.css'
import '@mantine/code-highlight/styles.css'
import { MantineProvider, createTheme } from '@mantine/core'
import AuthProvider from './providers/AuthProvider'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

const theme = createTheme({
	/** Put your mantine theme override here */
})

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AuthProvider>
			<MantineProvider theme={theme}>
				<QueryClientProvider client={queryClient}>
					<Router />
				</QueryClientProvider>
			</MantineProvider>
		</AuthProvider>
	</React.StrictMode>
)
