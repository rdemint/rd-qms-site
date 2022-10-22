export default function Header() {

return(
    <div className="flex items-center justify-between border-b-2 border-gray-100 p-6">
        <h2>Raines Demint</h2>
        <section className="flex space-x-5">
            <div className="rounded px-3 py-1 text-gray-600 hover:text-gray-800 hover:bg-gray-100">Blog</div>
            <div className="rounded px-3 py-1 text-gray-600 hover:text-gray-800 hover:bg-gray-100">About</div>
            <div className="rounded px-3 py-1 text-gray-600 hover:text-gray-800 hover:bg-gray-100">Docs</div>
        </section>
        </div>
)
}