import Link from 'next/link'

export default function Header() {

return(
    <div className="flex items-center justify-between border-b border-accent-100 shadow-lg shadow-gray-100 p-6">
        <Link href="/#">
            <a className="text-primary-900">Raines Demint</a>
        </Link>
        <section className="flex space-x-5">
            <Link href="/blog">
                <a  className="px-3 py-1 text-gray-900 hover:text-primary-900 hover:underline underline-offset-8 decoration-accent-900">Blog</a>
            </Link>
            <Link href="/about">
                <a className="px-3 py-1 text-gray-900 hover:text-primary-900 hover:underline underline-offset-8 decoration-accent-900">About</a>
            </Link>
            <Link href="/docs">
                <a className="px-3 py-1 text-gray-900 hover:text-primary-900 hover:underline underline-offset-8 decoration-accent-900">Docs</a>
            </Link>
        </section>
        </div>
)
}