import SideBarNav from '@/components/layouts/SidebarNav'
import SearchModal from '@/components/search/SearchModal'

export default function SidebarLayout({ children }) {
    return (
        <>
            <div className="px-6 flex flex-col md:flex-row">
                <div className="flex md:flex-col justify-between items-start py-2 h-12">
                    <SearchModal/>
                    <SideBarNav />
                </div>
                <div>
                    {children}
                </div>
            </div>
        </>
    )
}