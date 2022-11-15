import '../styles/globals.css'
import 'instantsearch.css/themes/satellite.css'
import AppShell from '@/components/AppShell'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch } from 'react-instantsearch-hooks-web'
import Head from 'next/head'

const searchClient = algoliasearch(process.env.NEXT_PUBLIC_ALGOLIA_APP_ID, process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY);

function MyApp({ Component, pageProps }) {
    return (
        <>
        <Head>
            <link rel="icon" href="/rd_favicon.png" type="image/png"/>
        </Head>
        <InstantSearch searchClient={searchClient} indexName="qms_data_index">
        <AppShell>
            <Component {...pageProps} />
        </AppShell>
        </InstantSearch >
        </>
)

}

export default MyApp
