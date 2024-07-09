import { NextRequest } from 'next/server';

export const withLogging = (next: Function) => {
  return async (request: NextRequest) => {
    // ...
    console.log('withLogging middleware');
    return next(request);
  };
};
