import { getFiles } from '@/lib/mdxfiles'

import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { getFileData, getPaths } from "@/lib/mdxfiles";
import Container from '@/components/Container'

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
            <h2 className="text-4xl tracking-tight font-medium pt-8 pb-4">All blog articles</h2>
            <p className="text-gray-700">Because writing is cheaper than therapy...</p>
            <ul role="list" className="divide-y divide-gray-200 space-y-3 max-w-3xl mx-auto">
                {posts.map(
                    (post) => (
                        <li className="px-6 py-4" key={post.title}>{post.title}</li>
                    )
                )}
            </ul>
        </Container>
)
}