import { Highlight } from 'react-instantsearch-hooks-web'
import Link from 'next/link'

export default function SearchHit({ hit }) {
  return (
    <article className="my-4">
        <Link href={`/docs/${hit.slug}`}>
          <a className="">
                  <Highlight attribute="title" hit={hit} className="text-lg font-medium hover:underline hover:decoration-slate-200 hover:underline-offset-4 "/>
            <p className="py-4 text-gray-700 text-md">{hit.summary}</p>
            <div class="flex space-x-2">
                        <Highlight attribute="tags" hit={hit} className="text-gray-600"/>

            </div>
          </a>
        </Link>
    </article>
  )
}
