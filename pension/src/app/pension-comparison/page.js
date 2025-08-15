import PensionComparisonForm from '@/components/PensionComparisonForm';
import Link from 'next/link';

export default function PensionComparisonPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-green-200 to-green-800">
      {/* Header */}
      <div className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-md">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </div>
              <div>
                <span className="text-2xl font-bold text-gray-900">Pension Planner Pro</span>
                <p className="text-xs text-gray-500 -mt-1">Smart Retirement Planning</p>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1">
              <Link href="/" className="px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200 font-medium">
                🏠 Home
              </Link>
              <Link href="/dashboard" className="px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200 font-medium">
                📊 Dashboard
              </Link>
              <Link href="/test-pension-api" className="px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200 font-medium">
                🧮 Calculator
              </Link>
              <Link href="/pension-comparison" className="px-4 py-2 bg-green-100 text-green-700 rounded-lg font-semibold border border-green-200">
                ⚖️ Comparison
              </Link>
              <Link href="/test-comparison" className="px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200 font-medium">
                🧪 Test API
              </Link>
              <Link href="/features" className="px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200 font-medium">
                ✨ Features
              </Link>
              <Link href="/about" className="px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200 font-medium">
                ℹ️ About
              </Link>
              <Link href="/contact" className="px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200 font-medium">
                📞 Contact
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button className="p-2 rounded-lg text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Page Header */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-black mb-4 drop-shadow-lg">
              Pension Scheme Comparison
            </h1>
            <p className="text-xl text-black max-w-3xl mx-auto drop-shadow-md">
              Compare your current pension plan with available schemes and get personalized recommendations for better retirement planning.
            </p>
          </div>
        </div>
      </div>

      {/* Form Component */}
      <PensionComparisonForm />
    </div>
  );
}
