import { NextResponse } from 'next/server';

export function chain(functions: Function[], index: number = 0) {
  const current = functions[index];
  if (current) {
    const next = chain(functions, index + 1) as Function;
    return current(next);
  }
  return () => NextResponse.next();
}
