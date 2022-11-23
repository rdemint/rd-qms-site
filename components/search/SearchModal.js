import { Hits } from 'react-instantsearch-hooks-web'
import SearchHit from '@/components/search/SearchHit'
import AlgoliaSearchBox from '@/components/search/AlgoliaSearchBox'
import { useState, useRef, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function SearchModal() {
  const [open, setOpen] = useState(false)
  const cancelButtonRef = useRef(null)
  const handleSearchClick = () => {
    setOpen(true)
  }
  return (
      <div className='md:pl-6 md:pb-4'>
          <button className="bg-slate-100 border border-slate-200 rounded text-slate-700 p-1 border-gray-200 w-36 md:w-72 text-left" onClick={handleSearchClick}>Search</button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10">
            <div className="flex justify-center min-h-full p-4 sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform rounded-lg bg-slate-50 px-4 pt-5 pb-4 shadow-xl transition-all sm:my-8 max-w-[90%] sm:p-6">
                  <div>
                    <div className="mt-3 sm:mt-5">
                      <Dialog.Title as="h3" className="text-lg font-medium text-slate-800">
                        Search the docs
                      </Dialog.Title>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:space-x-4 sm:items-center sm:justify-between">
                    <div className='w-48 sm:w-96'>
                      <AlgoliaSearchBox />
                    </div>
                    <div>
                      <button
                        type="button"
                        className="w-24 my-2 inline-flex justify-center rounded border bg-white p-2 text-base font-medium text-sky-700 shadow-sm hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 sm:text-sm"
                        onClick={() => setOpen(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                  <Hits hitComponent={SearchHit} />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
          </Transition.Root>
          
    </div>
  )
}
