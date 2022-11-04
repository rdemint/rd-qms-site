import Head from 'next/head'
import Hero from "@/components/Hero"
import Container from "@/components/Container"
import { useState, useEffect } from 'react'
import { Transition } from '@headlessui/react'


const catchphrases = [
    'The QMS should serve as a framework, not busywork.',
    'The QMS should be a toolkit, not checkbox compliance.',
    'The QMS should be a starter, to avoid reinventing the wheel.'
]


export default function Home() {
    const [current, setCurrent] = useState(0)
    useEffect(
        () => {
            const next = (current + 1) % catchphrases.length;
            const id = setTimeout(() => setCurrent(next), 3000);
            return () => clearTimeout(id);
        }, [current]
    )
  return (
    <div>
      <Head>
        <title>Raines Demint</title>
        <meta name="description" content="Medical device quality management systems" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col max-w-3xl mx-auto">
              <Hero />
                
              <div className="flex flex-col space-y-8 my-12 items-center w-full">
              <div className="flex flex-col items-center" >
                  <a href="/blog" className="rounded-md border border-accent-800 px-4 py-2 w-48 text-center text-accent-900 shadow shadow-accent2-400 hover:shadow-md hover:shadow-accent2-300">The blog</a>
                  <p className="text-gray-500 font-light">Expanded and freeform thoughts</p>
              </div>                                                                    
                                                                                        
                  <div className="flex flex-col items-center">
                      <a href="/docs" className="rounded-md border border-accent-900 px-4 py-2 w-48 text-center text-accent-900 shadow shadow-accent2-400 hover:shadow-md hover:shadow-accent2-300">The docs</a>
                  <p className="text-gray-500 font-light">Bite-sized learning and topic guides</p>
              </div>
              </div>
              <p className="text-primary-900 text-center">My mission is to bring teams the tools that get medical device teams to market faster and thrive there.</p>
              <p className="text-primary-900 text-center">What does your medical device team need to succeed? Reach out on
                  <span>
                      <a className="text-sky-800 hover:text-sky-900" href="linkedin.com/raines-demint"> LinkedIn</a>
                  </span>
              </p>
              <div id="carousel-container"className="flex flex-col align-items mt-12">
                <div className="relative flex justify-center h-10">
                          <div className={`${current === 0 ? 'opacity-100' : 'opacity-0'} absolute transition-opacity ease-in-out duration-300 text-accent-900 text-md text-center font-light text-lg`}>"{catchphrases[0]}"</div>
                          <div className={`${current === 1 ? 'opacity-100' : 'opacity-0'} absolute transition-opacity ease-in-out duration-300 text-accent-900 text-md text-center font-light text-lg`}>"{catchphrases[1]}"</div>
                          <div className={`${current === 2 ? 'opacity-100' : 'opacity-0'} absolute transition-opacity ease-in-out duration-300 text-accent-900 text-md text-center font-light text-lg`}>"{catchphrases[2]}"</div>
                </div>
                <div className="flex justify-center py-2 space-x-4">
                    <div className={`${current === 0 ? 'opacity-100' : 'opacity-50'} bg-primary-900 rounded-lg w-4 h-4 transition-opacity ease-in-out duration-200`}></div>
                    <div className={`${current === 1 ? 'opacity-100' : 'opacity-50'} bg-primary-900 rounded-lg w-4 h-4 transition-opacity ease-in-out duration-200`}></div>
                    <div className={`${current === 2 ? 'opacity-100' : 'opacity-50'} bg-primary-900 rounded-lg w-4 h-4 transition-opacity ease-in-out duration-200`}></div>
                </div>
               </div>
          </main>
      </div>

    )
}
