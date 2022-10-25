import Link from 'next/link'

export default function Header() {

return(
    <div className="flex items-center justify-between border-b-2 border-gray-100 p-6">
        <Link href="/#">
            <a>Raines Demint</a>
        </Link>
        <section className="flex space-x-5">
            <Link href="/blog" className="rounded px-3 py-1 text-gray-600 hover:text-gray-800 hover:bg-gray-100">Blog</Link>
            <Link href="/about" className="rounded px-3 py-1 text-gray-600 hover:text-gray-800 hover:bg-gray-100">About</Link>
            <Link href="/docs" className="rounded px-3 py-1 text-gray-600 hover:text-gray-800 hover:bg-gray-100">Docs</Link>
        </section>
        </div>
)
}