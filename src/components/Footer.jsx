import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0f] text-gray-300  ">
      {/* Questions Section with Logo */}
      <div className="max-w-7xl mx-auto mb-8 md:mb-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl md:text-4xl text-white font-light mb-3 md:mb-4">
              Do you have any questions?
            </h2>
            <p className="text-gray-400 text-sm md:text-base">
              Feel free to send us your questions or request a free consultation.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-purple-500 text-2xl md:text-3xl">/</div>
            <div className="text-purple-500 text-2xl md:text-3xl font-medium">Cognitify</div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-3 max-w-xl">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full md:flex-grow px-4 py-2 bg-transparent border border-gray-700 rounded-md focus:outline-none focus:border-purple-600"
          />
          <button className="w-full md:w-auto px-8 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
            Get Started
          </button>
        </div>
        <button className="mt-6 md:mt-8 text-gray-400 flex items-center gap-2 text-sm md:text-base">
          Disclaimer <span className="text-xl">+</span>
        </button>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Navigation - Scrollable on mobile */}
        <div className="overflow-x-auto pb-4 md:pb-0 mb-8 md:mb-0">
          <nav className="flex gap-6 md:gap-8 min-w-max md:min-w-0">
            <Link href="/" className="text-white hover:text-purple-500 whitespace-nowrap">
              Home
            </Link>
            <Link href="/about" className="hover:text-purple-500 whitespace-nowrap">
              About
            </Link>
            <Link href="/benefit" className="hover:text-purple-500 whitespace-nowrap">
              Benefit
            </Link>
            <Link href="/contact" className="hover:text-purple-500 whitespace-nowrap">
              Contact Us
            </Link>
            <Link href="/token" className="hover:text-purple-500 whitespace-nowrap">
              Token
            </Link>
          </nav>
        </div>

        <div className="flex flex-col gap-8 md:grid md:grid-cols-3 pb-8 md:pb-12 border-b border-gray-800">
          {/* Contact Info */}
          <div className="space-y-6 order-1 md:order-none">
            <div>
              <p className="text-xs md:text-sm text-gray-400 mb-2">SIGN UP</p>
              <p className="text-sm md:text-base">+000 0000 0000</p>
            </div>
            <div>
              <p className="text-xs md:text-sm text-gray-400 mb-2">EMAIL</p>
              <p className="text-sm md:text-base break-all">youremail@mail.com</p>
            </div>
          </div>

          {/* Hours & Branding */}
          <div className="space-y-6 order-2 md:order-none col-span-2 md:col-span-1">
            <div>
              <p className="text-xs md:text-sm text-gray-400 mb-2">OPENING HOURS</p>
              <p className="text-sm md:text-base">24/7</p>
            </div>
          </div>

          {/* Company Info */}
          <div className="order-3 md:order-none">
            <div className="text-left md:text-right">
              <p className="text-white text-sm md:text-base">
                Transforming Ideas into Intelligent Solutions
              </p>
              <p className="text-xs md:text-sm text-gray-400 mt-2">© 2045 — Copyright</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

