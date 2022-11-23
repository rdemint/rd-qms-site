import SidebarLayout from "../../components/layouts/SidebarLayout";


export default function DocsPage() {
    return (
        <SidebarLayout>
                <div className="flex flex-col max-w-7xl prose">
                
                <h2 className="text-4xl text-slate-700">Welcome to the docs</h2>
                <p>I intend for this to be a place for guides and bite-sized learning on medical device quality management 🚀.</p>
                <p>This space is intended to answer specific, common questions for a wide range of topics.  The plan is still being built out as far as what to prioritize to write about 🚧.</p>
                <p>Please <span><a href="https://www.linkedin.com/in/raines-demint/">reach out</a></span> with any specific requests for topics and questions.</p>
                </div>
        </SidebarLayout>
)
}