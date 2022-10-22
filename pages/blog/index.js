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

        <Container>
            <h2 className="text-4xl tracking-tight font-medium pt-8 pb-4">All posts</h2>
            <p className="text-gray-700">Where I write articles on medtech, quality management systems, software.</p>
            <p className="text-gray-700">Looking for bite-sized info on specific topics?  Head over to the <span className="text-rose-500"><Link href="/docs">Docs.</Link></span></p>
            <ul role="list" className="pt-6 space-y-5 max-w-3xl mx-auto">
                {posts.map(
                    (post) => (
                        <li className="border-l-2 border-rose-200 px-6 py-4" key={post.title}>
                            <Link href={`/blog/${post.slug}`}>
                                <a className="hover:text-rose-600">{post.title}</a>
                            </Link>
                            <p className="pt-1 text-sm text-gray-600">{post.summary}</p>
                            <div class="flex space-x-2">
                            {post.tags.map(
                                (tag) => (<div className="text-sm text-gray-700" key={tag}>{tag}</div>)
                                )}
                            </div>
</li>
                    )
                )}
            </ul>
        </Container>
)
}