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
              <div className="flex flex-col space-y-8 my-6 items-center w-full">
              <div className="flex flex-col items-center" >
                  <a href="/blog" className="rounded-md border border-accent-700 px-4 py-2 w-48 text-center text-accent-900 shadow shadow-primary-100 hover:shadow-md">blog</a>
                  <p className="text-gray-500 font-light">Expanded and freeform thoughts</p>
              </div>                                                                    
                                                                                        
                  <div className="flex flex-col items-center">
                      <a href="/docs" className="rounded-md border border-accent-700 px-4 py-2 w-48 text-center text-accent-900 shadow shadow-primary-100 hover:shadow-md">docs</a>
                  <p className="text-gray-500 font-light">Bite-sized learning and topic guides</p>
              </div>
              </div>
              <div className="my-6">
                  <p className="text-primary-900 text-center">I build tools for medtech teams so that they can get to market faster and then thrive there.</p>
                  <p className="text-gray-500 font-light text-center">What does your medical device team need to succeed? Reach out on
                      <span>
                          <a className="text-primary-800 hover:text-primary-500" href="linkedin.com/raines-demint"> LinkedIn</a>
                      </span>
                      </p>
              </div>
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
