"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  
    const formData = new FormData(event.currentTarget);
    const companyName = formData.get("companyName")?.toString().trim();
    const jobTitle = formData.get("jobTitle")?.toString().trim();
    const location = formData.get("location")?.toString().trim();
  
    // Build query parameters dynamically
    const queryParams = new URLSearchParams();
    if (companyName) queryParams.append("companyName", companyName);
    if (jobTitle) queryParams.append("jobTitle", jobTitle);
    if (location) queryParams.append("location", location);
  
    // Redirect to the results page
    router.push(`/results?${queryParams.toString()}`);
  }
  
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-lg rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">Submit Company Details</h1>
        <form className="space-y-6" onSubmit={onSubmit}>
          <div>
            <label htmlFor="companyName" className="block text-gray-700 font-semibold mb-2">
              Company Name *
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              // required
              placeholder="Enter the company name"
              className="block w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-800 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
          </div>
          <div>
            <label htmlFor="jobTitle" className="block text-gray-700 font-semibold mb-2">
              Job Title (Optional)
            </label>
            <input
              type="text"
              id="jobTitle"
              name="jobTitle"
              placeholder="Enter the job title"
              className="block w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-800 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
          </div>
          <div>
            <label htmlFor="location" className="block text-gray-700 font-semibold mb-2">
              Location (Optional)
            </label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="Enter the location"
              className="block w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-800 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 px-4 py-3 text-white font-semibold shadow-sm hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
