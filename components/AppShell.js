import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AppShell({ children }) {
	return (
		<div className="min-h-screen flex flex-col justify-between">
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
)

}