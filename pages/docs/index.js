import SidebarLayout from "../../components/layouts/SidebarLayout";


export default function DocsPage() {
    return (
        <SidebarLayout>
                <div className="flex flex-col max-w-7xl px-4">
                    <h2 className="text-2xl">Welcome to the docs</h2>
                    <p>A place for guides and bite-sized learning on medical device quality management.</p>
                </div>
            </SidebarLayout>
)
}