import { useState, useRef } from 'react'
import copyTextToClipboard from '@/lib/copyTextToClipboard'

export default function ReportLang({ children }) {
  const [isCopied, setIsCopied] = useState(false)
  const handleCopyClick = () => {
    const textContent = document.getElementById('reportlang').innerText
    copyTextToClipboard(textContent)
      .then(() => {
        setIsCopied(true)
      })

      .catch((err) => console.log(err))
  }

  return (
    <div className="my-4 rounded">
      <div className="flex items-center justify-between bg-slate-100">
        <div className=" px-4 text-slate-600">Example Report Notes</div>
        <button className="m-2 rounded bg-slate-300 text-slate-500 p-1" onClick={handleCopyClick}>
          {isCopied ? 'Copied!' : 'Copy'}
        </button>
      </div>
          <div id="reportlang" className="bg-gray-50 px-8 border border-gray-50">
        {children}
      </div>
    </div>
  )
}
