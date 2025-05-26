import React from 'react'

function Service() {
  return (
    <div
      className="p-4 bg-[url('https://i.pinimg.com/originals/b1/8d/51/b18d5124d08c77a110323493464ff7ae.gif')] h-fit bg-no-repeat bg-cover bg-center text-white"
    >
      <div className="min-h-screen text-white px-6 py-12 flex justify-center">
      <div className="max-w-5xl w-full">
        <h1 className="text-4xl font-bold text-orange-500 mb-10 text-center">Our Services</h1>

        <div className="grid gap-10 md:grid-cols-2">
          {/* Accounting */}
          <div className="backdrop-blur-[4px] p-6 rounded-lg shadow-md border border-gray-800">
            <h2 className="text-2xl font-semibold mb-3 text-orange-400">Accounting Services</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Preparation of financial statements (Balance Sheet, P&L, etc.)</li>
              <li>Bookkeeping and ledger management</li>
              <li>Year-end closing and reconciliation</li>
              <li>Preparation of projected financials and reports</li>
            </ul>
          </div>

          {/* Taxation */}
          <div className="backdrop-blur-[4px] p-6 rounded-lg shadow-md border border-gray-800">
            <h2 className="text-2xl font-semibold mb-3 text-orange-400">Taxation Services</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>GST Return Filing (GSTR-1, GSTR-3B, GSTR-9, GSTR-9C)</li>
              <li>Income Tax Return (ITR) filing for individuals & corporates</li>
              <li>TDS Return filing and compliance</li>
              <li>Tax planning and consultancy for savings optimization</li>
            </ul>
          </div>

          {/* Auditing */}
          <div className="backdrop-blur-[4px] p-6 rounded-lg shadow-md border border-gray-800">
            <h2 className="text-2xl font-semibold mb-3 text-orange-400">Audit & Assurance</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Statutory audit under Companies Act</li>
              <li>Tax audit under Income Tax Act</li>
              <li>Internal and Concurrent audits</li>
              <li>Banking sector audit (CBS, credit, concurrent)</li>
              <li>Reporting under CARO 2020 and Form 3CD</li>
            </ul>
          </div>

          {/* Company Compliance */}
          <div className="backdrop-blur-[4px] p-6 rounded-lg shadow-md border border-gray-800">
            <h2 className="text-2xl font-semibold mb-3 text-orange-400">Company Compliance</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>ROC Filings (AOC-4, MGT-7, DPT-3)</li>
              <li>Company & LLP Incorporation</li>
              <li>Company strike-off and LLP conversion</li>
              <li>Maintaining statutory registers and minutes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Service
