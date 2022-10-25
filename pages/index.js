import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Hero from "@/components/Hero"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Raines Demint</title>
        <meta name="description" content="Medical device quality management systems" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
              <Hero />
              <div className="flex flex-col items-center pt-12 max-w-6xl">
              <div>
                  <a>CTA: Check out the blog</a>
                  <p>I write about medical device topics</p>
              </div>

              <div>
                  <a>CTA: Check out the blog</a>
                  <p>I write about medical device topics</p>
              </div>
           </div>
          </main>
      </div>
    )
}
