import React from 'react'

function About() {
  return (
    <div
      className="p-4 bg-[url('https://i.pinimg.com/originals/37/2e/38/372e38a7f08f5a0005f5b950a815c791.gif')] h-fit bg-no-repeat bg-cover bg-center text-white px-6 lg:px-12">
      <div className="min-h-svh rounded-[10px] backdrop-blur-[2px]  border-amber-800 text-white py-10 px-5 lg:px10">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-orange-600 mb-6 text-center">About Karan Aggarwal</h2>

        {/* Intro Paragraph */}
        <div className="flex flex-col-reverse lg:flex-row gap-[30%] items-center lg:items-start gap-8">
          {/* Left: Text */}
          <div className="w-full lg:w-1/2">
            <p className="text-gray-300 leading-relaxed mb-6 mt-4 md:mt-0">
              I’m a Chartered Accountant (CA) Finalist with over 6 months of diverse experience.
              I successfully completed a rigorous 3-year articleship at SSR &amp; Co.,
              and have passed the CA Final Group II examination on my first attempt.
              I specialize in accounting, auditing, and taxation—simplifying complex regulations
              so individuals and businesses can make confident financial decisions.
            </p>
            {/* ...other About sections here */}
          </div>

          {/* Right: Image */}
          <div className="w-fit flex justify-center lg:justify-end">
            <img
              src='/karan.png'  
              alt="Karan Aggarwal"
              className="object-cover rounded-lg shadow-lg max-h-80 lg:max-h-[200px]"
            />
          </div>
        </div>

        <hr className="border-gray-600 my-8" />

        {/* Qualifications */}
        <h3 className="text-2xl font-bold text-white mb-4">Qualifications & Memberships</h3>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>CA Finalist (passed Group II, Group I awaited)</li>
          <li>Chartered Accountant Intermediate (CA Inter)</li>
          <li>B.Com (Hons), University of Delhi</li>
        </ul>

        <hr className="border-gray-600 my-8" />

        {/* Expertise */}
        <h3 className="text-2xl font-bold text-white mb-4">Areas of Expertise</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-300">
          <div>✓ Tax Planning & Compliance</div>
          <div>✓ Statutory & Internal Audits</div>
          <div>✓ GST Consulting</div>
          <div>✓ Financial Reporting & MIS</div>
          <div>✓ Accounting & Bookkeeping</div>
          <div>✓ Business Advisory</div>
        </div>

        <hr className="border-gray-600 my-8" />

        {/* Timeline */}
        <h3 className="text-2xl font-bold text-white mb-4">Career Journey</h3>
        {/* Experience Section */}
        <div className="mt-10">
          <h3 className="text-2xl font-bold text-white mb-6">Experience</h3>

          {/* Associate Role */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold text-orange-500">SSR & Co. – Associate</h4>
            <p className="text-gray-400 italic">November 2024 – Present | Delhi, India</p>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
              <li>Filed 20+ GST returns (GSTR-1, GSTR-3B) and prepared 10+ annual returns (GSTR-9, GSTR-9C).</li>
              <li>Managed ROC filings: incorporations, strike-offs, LLP conversions, and DPT-3 compliance.</li>
              <li>Handled GST & income tax registrations for corporate and individual clients.</li>
              <li>Prepared financial statements and year-end accounting independently.</li>
              <li>Filed TDS returns and income tax returns for clients with ₹100+ crore turnover, achieving 20% tax savings.</li>
            </ul>
          </div>

          {/* Article Assistant Role */}
          <div>
            <h4 className="text-xl font-semibold text-orange-500">SSR & Co. – Article Assistant</h4>
            <p className="text-gray-400 italic">August 2021 – August 2024 | Delhi, India</p>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
              <li>Conducted audits in FMCG, Construction, IT, Education, and Financial Services sectors.</li>
              <li>Prepared audit reports including KAM, EOM, and CARO 2020 (Clauses 1, 3, 7, 9, 21).</li>
              <li>Reported under Form 3CD (Clauses 18, 19, 20, 31, 32, 34, 44).</li>
              <li>Led statutory audit team of 5; handled planning, execution, and reporting.</li>
              <li>Performed audits on loans, payroll, revenue, fixed assets, and treasury.</li>
              <li>Specialized in CBS-based bank audits including revenue, concurrent, credit, and FEMA audits.</li>
            </ul>

            {/* Key Projects */}
            <div className="mt-4">
              <h5 className="font-semibold text-white">Key Projects & Highlights:</h5>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
                <li>Discovered ₹3 crore in undisclosed GIT and ₹32 lacs in tax liabilities due to non-compliance.</li>
                <li>Identified misclassified personal expenses (20%) in statutory audit reports.</li>
                <li>Led concurrent audits and improved process efficiency, reducing errors by 40%.</li>
                <li>Trained junior auditors and streamlined audit workflows across assignments.</li>
              </ul>
            </div>
          </div>
        </div>


        <hr className="border-gray-600 my-8" />

        {/* Values */}
        <h3 className="text-2xl font-bold text-white mb-4">My Work Philosophy</h3>
        <p className="text-gray-300 max-w-2xl mb-6">
          I believe in proactive problem-solving, clear communication, and tailoring solutions to each client’s specific needs.
          Your peace of mind is my priority.
        </p>

        {/* Personal touch */}
        <p className="text-gray-400 italic mb-4">Beyond numbers, I enjoy reading non-fictional books and cricket on weekends.</p>

        {/* Call to Action */}
        <a
          href="/contact"
          className="inline-block bg-orange-700 hover:bg-orange-800 text-white px-6 py-2 rounded mt-4 font-semibold transition"
        >
          Let’s Talk Finance →
        </a>
      </div>
    </div>
  )
}

export default About
