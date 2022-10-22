import SideBarNav from '@/components/layouts/SidebarNav'

export default function SidebarLayout({ children }) {
    return (
        <div className="block pt-8 md:flex">
            <SideBarNav />
            {children}
        </div>
    )
}