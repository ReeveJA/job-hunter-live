import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-500 via-blue-100 to-white flex items-center justify-center">
      <div className="text-center p-6 bg-white bg-opacity-80 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Job Hunter Live
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Your One-Stop Hub for Jobs Across All Platforms.
        </p>
        <Link
          href="/form"
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}


