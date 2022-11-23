import Head from 'next/head'
import Link from 'next/link'
import Hero from "@/components/Hero"
import { useState, useEffect } from 'react'


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
            <div className="bg-[url('../public/background_design_o20.svg')] bg-cover bg-center">
                <div className="backdrop-blur-sm">
                    <div className="mx-auto max-w-3xl">
                    <Hero />
                    <div className="h-64 flex flex-col space-y-8 items-center justify-center w-full">
                        <div className="flex flex-col items-center" >
                            <Link href="/blog">
                                <a  className="shadow-inner rounded-md px-4 py-2 w-48 text-center text-slate-700 bg-gradient-to-b from-slate-100 to-slate-200 hover:shadow-md">Blog</a>
                            </Link>
                            <p className="text-gray-500 font-light">Expanded and freeform thoughts</p>
                        </div>                                                                    
                        <div className="flex flex-col items-center">
                            <Link href="/docs">
                                <a className="shadow-inner shadow-slate-500 rounded-md px-4 py-2 w-48 text-center text-slate-50 bg-gradient-to-b from-slate-700 to-slate-600 hover:shadow-md">Docs</a>
                            </Link>
                            <p className="text-gray-500 font-light">Bite-sized learning and topic guides</p>
                        </div>
                    </div>
                    <div className="max-w-xs sm:max-w-md mx-auto flex flex-col px-4">
                        <p className="text-gray-500 text-center">I build tools for medtech teams so that they can get to market faster and then thrive there.</p>
                        <p className="pt-4 text-gray-500 text-center">What does your medical device team need to succeed? Reach out on
                            <span>
                                <Link href="linkedin.com/raines-demint">
                                    <a className="text-primary-800 hover:text-primary-500"> LinkedIn</a>
                                </Link>
                            </span>
                        </p>
                    </div>
                    <div id="carousel-container"className="flex flex-col items-center pt-16 px-4">
                        <div className='h-14 w-96 relative'>
                            <div className={`${current === 0 ? 'opacity-100' : 'opacity-0'} absolute text-center transition-opacity ease-in-out duration-500 text-accent-900 text-md`}>"{catchphrases[0]}"</div>
                            <div className={`${current === 1 ? 'opacity-100' : 'opacity-0'} absolute text-center transition-opacity ease-in-out duration-500 text-accent-900 text-md`}>"{catchphrases[1]}"</div>
                            <div className={`${current === 2 ? 'opacity-100' : 'opacity-0'} absolute text-center transition-opacity ease-in-out duration-500 text-accent-900 text-md`}>"{catchphrases[2]}"</div>
                        </div>
                        <div className="flex justify-center py-2 space-x-4 h-12">
                            <div className={`${current === 0 ? 'opacity-100' : 'opacity-50'} bg-gray-400 rounded-lg w-2 h-2 transition-opacity ease-in-out duration-500`}></div>
                            <div className={`${current === 1 ? 'opacity-100' : 'opacity-50'} bg-gray-400 rounded-lg w-2 h-2 transition-opacity ease-in-out duration-500`}></div>
                            <div className={`${current === 2 ? 'opacity-100' : 'opacity-50'} bg-gray-400 rounded-lg w-2 h-2 transition-opacity ease-in-out duration-500`}></div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
    )
}
