import SideBarNav from '@/components/layouts/SidebarNav'
import SearchModal from '@/components/search/SearchModal'

export default function SidebarLayout({ children }) {
    return (
        <>
            <div className="pt-8 px-4 flex justify-center">
                <div className="flex-col">
                    <SearchModal />
                    <SideBarNav />
                </div>
                <div className="block">
                    {children}
                </div>
            </div>
</>
    )
}