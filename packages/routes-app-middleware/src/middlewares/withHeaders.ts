import { NextRequest } from 'next/server';

export const withHeaders = (next: Function) => {
  return async (request: NextRequest) => {
    // ...
    console.log('withHeaders middleware');
    return next(request);
  };
};
