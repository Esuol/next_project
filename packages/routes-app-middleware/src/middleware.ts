import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/blog/berlin_middleware', request.url));
}

export const config = {
  matcher: 'blog/berlin',
};
