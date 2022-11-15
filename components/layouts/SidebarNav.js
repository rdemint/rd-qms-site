import { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Link from 'next/link'
import { DocsNavList } from '@/data/docs/docsNavList'
import { XMarkIcon, Bars3BottomLeftIcon } from '@heroicons/react/20/solid'


function NavItems() {
    return (
        <nav className="space-y-1 px-2 pb-4">
            {DocsNavList.map((section, i) => {
                return (
                    <div key={section.name}>
                        <h2 className="text-2xl font-semibold text-slate-800">{section.name}</h2>

                        <div className="pl-3 ml-1 my-1">
                            {section.children.map((child, i) => {
                                return (
                                    <div className="mb-1" key={child.name}>
                                        <h2 className="text-xl font-medium mb-1 text-slate-700">{child.name}</h2>
                                        {child.children.map((topic, i) => {
                                            return (
                                                <div key={topic.name} className="pl-2 border-l border-gray-200 hover:border-accent-900 ml-2">
                                                    <Link href={topic.slug}>
                                                        <a className="text-md tracking-tight text-zinc-700 hover:text-gray-900 whitespace-nowrap">
                                                            {topic.name}
                                                        </a>
                                                    </Link>
                                                </div>
                                            )
                                        })}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </nav>
    )
}

export default function SidebarNav() {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <section id="sidebars" className="max-h-screen overflow-auto">
            <button
                type="button"
                className="mt-2 mb-12 focus:ring-primary text-slate-700 focus:outline-none focus:ring-2 focus:ring-inset md:hidden hover:text-slate-800 hover:bg-gray-100 rounded"
                onClick={() => setSidebarOpen(true)}
            >
                <span className="sr-only">Open sidebar</span>
                
                <Bars3BottomLeftIcon className="h-8 w-8" aria-hidden="true" />
                </button>
            <section id="mobile-sidebar">
                <Transition.Root show={sidebarOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-40 md:hidden" onClose={setSidebarOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                        </Transition.Child>
                        <div className="fixed inset-0 z-40 flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <Dialog.Panel className="relative flex w-full max-w-[65%] flex-1 flex-col overflow-y-auto overflow-x-hidden bg-white pt-5 pb-4">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-300"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute top-0 right-0 pt-2">
                                            <button
                                                type="button"
                                                className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                                onClick={() => setSidebarOpen(false)}
                                            >
                                                <span className="sr-only">Close sidebar</span>
                                                <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </Transition.Child>
                                    <div className="pl-6">
                                        <NavItems />
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>
            </section>
            <section id="desktop-sidebar">
                <div className="t-0 sticky hidden h-full w-96 pl-4 md:block">
                    <div className="flex flex-grow flex-col border-gray-200">
                        <div className="flex flex-grow flex-col">
                            <NavItems />
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}