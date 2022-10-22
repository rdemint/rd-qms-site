import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { getFileData, getPaths } from "@/lib/mdxfiles";
import Header from '@/components/Header'

export async function getStaticPaths() {
    const paths = getPaths('blog')
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const { slug } = context.params
    const source = getFileData('blog', slug)
    const { content, data } = matter(source)
    const mdxSource = await serialize(content)

    return {
        props: {
            mdxSource,
            frontMatter: data
        }
    }
}

export default function BlogPage({mdxSource, frontMatter}) {
    return (
        <div>
            <h1 className="text-2xl">{frontMatter.title}</h1>
            <div className="prose">
                <MDXRemote {...mdxSource} />
            </div>
        </div>
    )
}