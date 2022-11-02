import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Hero from "@/components/Hero"
import Container from "@/components/Container"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Raines Demint</title>
        <meta name="description" content="Medical device quality management systems" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col">
              <Hero />
              <div className="flex flex-col space-y-8 pt-12 items-center w-full">
              <div className="flex flex-col items-center" >
                  <a href="/blog" className="rounded-md border border-transparent bg-sky-800 px-4 py-2 w-48 text-center font-medium text-white shadow-sm hover:bg-sky-700">The blog</a>
                  <p className="">Expanded and freeform thoughts</p>                            
              </div>                                                                    
                                                                                        
                  <div className="flex flex-col items-center">
                      <a href="/docs" className="rounded-md border border-transparent bg-sky-800 px-4 py-2 w-48 text-center font-medium text-white shadow-sm hover:bg-sky-700">The docs</a>
                  <p>Bite-sized learning and topic guides</p>
              </div>
              </div>
              <Container>
                  <div className="flex justify-center py-12">
                  <p className="font-light tracking-tight">What does your medical device team need to succeed? Reach out on 
                  <span>
                      <a className="text-sky-800 hover:text-sky-900" href="linkedin.com/raines-demint"> LinkedIn</a>
                      </span>
                      </p>
                  </div>
              </Container>
          </main>
      </div>
    )
}
