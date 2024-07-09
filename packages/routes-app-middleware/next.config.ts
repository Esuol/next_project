import { redirect } from 'next/dist/server/api-utils';

module.exports = {
  async redirects() {
    return [
      {
        source: 'blog/berlin',
        destination: '/blog/berlin_redirects',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: 'blog/berlin',
          destination: '/blog/berlin_beforeFiles',
        },
      ],
      afterFiles: [
        {
          source: '/blog/berlin',
          destination: '/blog/berlin_afterFiles',
        },
      ],
      fallback: [
        {
          source: '/blog/belin',
          destination: `/blog/berlin_fallback`,
        },
      ],
    };
  },
};
