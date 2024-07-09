import { NextRequest, NextResponse } from 'next/server';
import { RateLimiter } from 'limiter';
import { chain } from '@/lib/utils';
import { withHeaders } from '@/middlewares/withHeaders';
import { withLogging } from '@/middlewares/withLogging';

const limiter = new RateLimiter({
  tokensPerInterval: 3,
  interval: 'min',
  fireImmediately: true,
});

// export async function middleware(request: NextRequest) {
//   const remainingRequests = await limiter.removeTokens(1);
//   if (remainingRequests < 0) {
//     return new NextResponse(
//       JSON.stringify({ success: false, message: 'Too Many Requests' }),
//       { status: 429, headers: { 'content-type': 'application/json' } }
//     );
//   }

//   return NextResponse.next();
// }

export default chain([withHeaders, withLogging]);

// 设置匹配路径
export const config = {
  matcher: '/api/:path*',
};
