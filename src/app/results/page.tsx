"use client";

import { useSearchParams } from "next/navigation";

export default function ResultsPage() {
  const searchParams = useSearchParams();
  const companyName = searchParams.get("companyName") || ""; // Empty string if not provided
  const jobTitle = searchParams.get("jobTitle") || ""; // Empty string if not provided
  const location = searchParams.get("location") || ""; // Empty string if not provided

  // Dynamically construct search query for each platform
  const searchKeywords = [companyName, jobTitle].filter(Boolean).join(" ");

  const results = {
    linkedIn: {
      logo: "/linkedin.png",
      url: `https://www.linkedin.com/jobs/search?keywords=${encodeURIComponent(
        searchKeywords
      )}&location=${encodeURIComponent(location)}`,
      count: 5, // Mock count
    },
    indeed: {
      logo: "/indeed.png",
      url: `https://www.indeed.com/jobs?q=${encodeURIComponent(
        searchKeywords
      )}&l=${encodeURIComponent(location)}`,
      count: 7, // Mock count
    },
    totalJobs: {
        logo: "/totaljobs.png",
        url: `https://www.totaljobs.com/jobs/${encodeURIComponent(
          searchKeywords
        )}?location=${encodeURIComponent(location)}`,
        count: 3, // Placeholder count
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-500 via-blue-100 to-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Results for{" "}
          {searchKeywords || "Jobs"}
          {location && ` in ${location}`}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(results).map(([key, value]) => (
            <div
              key={key}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center"
            >
              <img
                src={value.logo}
                alt={`${key} logo`}
                className="h-10 w-18 items-center mb-4 object-contain"
              />
              <h2 className="text-xl font-bold text-gray-800 capitalize">
                {key}
              </h2>
              {/* <p className="text-gray-600 mb-4">{value.count} Results</p> */} 
              <a
                href={value.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                View Results
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
