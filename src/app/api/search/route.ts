import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { companyName, jobTitle, location } = body;

    // Dynamically construct search query by including only non-empty fields
    const searchKeywords = [companyName, jobTitle]
      .filter(Boolean) // Include only non-empty values
      .join(" "); // Combine them with a space

    const searchLocation = location || ""; // Use location only if provided

    // Construct search URLs
    const linkedInUrl = `https://www.linkedin.com/jobs/search?keywords=${encodeURIComponent(
      searchKeywords
    )}&location=${encodeURIComponent(searchLocation)}`;
    const indeedUrl = `https://www.indeed.com/jobs?q=${encodeURIComponent(
      searchKeywords
    )}&l=${encodeURIComponent(searchLocation)}`;
    // const totalJobsUrl = `https://www.totaljobs.com/jobs/${encodeURIComponent(
    //   searchKeywords
    // )}?location=${encodeURIComponent(searchLocation)}`;

    // Return constructed URLs
    return NextResponse.json({
      linkedIn: linkedInUrl,
      indeed: indeedUrl,
      // totalJobs: totalJobsUrl,
      
    });
  } catch (error) {
    console.error("Error in search API:", error);
    return NextResponse.json(
      { error: "Something went wrong, please try again later" },
      { status: 500 }
    );
  }
}
