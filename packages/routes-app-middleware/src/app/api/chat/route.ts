import { NextResponse } from 'next/server';
import { RateLimiter } from 'limiter';

const limiter = new RateLimiter({
  tokensPerInterval: 3,
  interval: 'min',
  fireImmediately: true,
});

export async function GET() {
  const remainingRequests = await limiter.removeTokens(1);

  if (remainingRequests < 0) {
    return new NextResponse(
      JSON.stringify({ success: false, message: 'too many requests' }),
      { status: 429, headers: { 'Content-Type': 'application/json' } }
    );
  }

  return NextResponse.json({ success: true, message: 'ok', data: 'ok-data' });
}
