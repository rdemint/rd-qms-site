import { getFiles } from '@/lib/mdxfiles'
import Container from '@/components/Container'
import Link from 'next/link'

export async function getStaticProps() {
    const posts = getFiles('blog')
    return {
        props: {
            posts
        }
    }
}

export default function BlogHome({posts}) {
    return (
        <div className="bg-[url('../public/background_design_o20.svg')] bg-cover bg-center">
            <div className="backdrop-blur-md">
            <div className="max-w-3xl mx-auto mx-4">
            <h2 className="text-4xl tracking-tight font-medium text-slate-800 pt-8 pb-4">All posts</h2>
            <p className="text-slate-700">Where I write on medtech, quality management systems, and software.</p>
            <p className="text-gray-500">Looking for bite-sized info on specific topics?  Head over to the <span className="text-primary-900"><Link href="/docs">Docs.</Link></span></p>

            <ul role="list" className="pt-6 space-y-9">
                {posts.map(
                    (post) => (
                        <li className="text-2xl bg-white text-slate-800 border-l-2 border-accent-600 px-6 py-6  hover:border-accent-900 shadow" key={post.title}>
                            <Link href={`/blog/${post.slug}`}>
                                <a className="hover:text-gray-800">
                                    {post.title}
                                    <p className="pt-1 text-sm text-slate-700">{post.summary}</p>
                                    <div class="flex space-x-2 mt-2">
                                    {post.tags.map(
                                        (tag) => (<div className="text-xs text-slate-500" key={tag}>'{tag}'</div>)
                                        )}
                                    </div>
                                    <div className="text-xs text-slate-500 pt-2">{post.date}</div>
                                    
                                </a>
                            </Link>
                        </li>
                    )
                )}
                </ul>
                </div>
            </div>
</div>
)
}