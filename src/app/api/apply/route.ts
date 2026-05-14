import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log('Incoming Lead:', body.name);

    const requiredFields = ['name', 'phone', 'email', 'city', 'neetStatus', 'university'];
    for (const field of requiredFields) {
      if (!body[field]) {
        console.error('Validation Failed: Missing', field);
        return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 });
      }
    }

    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

    if (GOOGLE_SCRIPT_URL) {
      console.log('Attempting Google Sheet Sync...');
      try {
        const response = await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
            ...body
          }),
        });

        if (!response.ok) {
          const text = await response.text();
          console.error('Google Response Error:', text);
          return NextResponse.json({ error: `Google Sheets Error: ${response.statusText}` }, { status: 502 });
        }
        
        console.log('✅ Lead synced to Google Sheets successfully');
      } catch (fetchError: any) {
        console.error('Fetch Connection Error:', fetchError.message);
        return NextResponse.json({ error: 'Connection to Google Sheets failed' }, { status: 503 });
      }
    } else {
      console.warn('⚠️ No GOOGLE_SCRIPT_URL - Lead logged to console only');
      console.log('Lead Data:', body);
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error('Critical API Error:', err.message);
    return NextResponse.json({ error: err.message || 'Server error' }, { status: 500 });
  }
}
