import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Validate request body
    const requiredFields = ['name', 'phone', 'email', 'city', 'neetStatus', 'university', 'pageUrl'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 });
      }
    }

    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

    // If a Google Apps Script URL is provided, send data there
    if (GOOGLE_SCRIPT_URL) {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          ...body
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit to Google Sheets');
      }
    } else {
      // Simulate submission if no URL is configured
      console.log('Form submission received (No GOOGLE_SCRIPT_URL configured):', body);
      // Wait a moment to simulate network request
      await new Promise(resolve => setTimeout(resolve, 800));
    }

    return NextResponse.json({ success: true, message: 'Application submitted successfully' });
  } catch (error) {
    console.error('Apply API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
