import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { getFileData, getPaths } from "@/lib/mdxfiles";
import Container from '@/components/Container'

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
        <Container>
            <div className="flex flex-col items-center max-w-7xl">
            <h1 className="text-4xl max-w-3xl text-center pt-8 pb-4 border-b-2 border-rose-200">{frontMatter.title}</h1>
            <div className="prose">
                <MDXRemote {...mdxSource} />
                </div>
            </div>
        </Container>
    )
}