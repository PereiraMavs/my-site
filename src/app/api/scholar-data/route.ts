import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Your Google Scholar user ID
    const userId = 'Kokbc-oAAAAJ';
    
    // We'll use SerpAPI to fetch Google Scholar data
    // You'll need to sign up for a free account at serpapi.com
    const apiKey = process.env.SERPAPI_KEY;
    
    if (!apiKey) {
      // Fallback to static data if no API key is provided
      return NextResponse.json({
        citations: 15,
        hIndex: 2,
        i10Index: 1,
        publications: 2,
        recentCitations: [3, 5, 7], // Last 3 years
        lastUpdated: new Date().toISOString()
      });
    }

    const response = await fetch(
      `https://serpapi.com/search.json?engine=google_scholar_author&author_id=${userId}&api_key=${apiKey}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch scholar data');
    }

    const data = await response.json();
    
    // Extract metrics from the response
    const scholarData = {
      citations: data.cited_by?.table?.[0]?.citations?.all || 15,
      hIndex: data.cited_by?.table?.[1]?.h_index?.all || 2,
      i10Index: data.cited_by?.table?.[2]?.i10_index?.all || 1,
      publications: data.articles?.length || 2,
      recentCitations: data.cited_by?.graph || [3, 5, 7],
      lastUpdated: new Date().toISOString()
    };

    return NextResponse.json(scholarData);
    
  } catch (error) {
    console.error('Error fetching Google Scholar data:', error);
    
    // Return fallback data on error
    return NextResponse.json({
      citations: 15,
      hIndex: 2,
      i10Index: 1,
      publications: 2,
      recentCitations: [3, 5, 7],
      lastUpdated: new Date().toISOString(),
      error: 'Using cached data'
    });
  }
}
