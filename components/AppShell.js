import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AppShell({ children }) {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<main className="grow">{children}</main>
			<Footer className="grow-0"/>
		</div>
)

}