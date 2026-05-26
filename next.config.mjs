/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/projects/quipu-front",
        destination: "/projects/quipu-token-market",
        permanent: true,
      },
      {
        source: "/projects/quipu-back",
        destination: "/projects/quipu-token-market",
        permanent: true,
      },
      {
        source: "/projects/quipu-angular-rapid-test",
        destination: "/projects/quipu-token-market",
        permanent: true,
      },
      {
        source: '/projects',
        has: [{ type: 'query', key: 'tab', value: 'opensource' }],
        destination: '/projects#open-source',
        permanent: true,
      },
      {
        source: '/projects',
        has: [{ type: 'query', key: 'tab', value: 'hobby' }],
        destination: '/projects#side-projects',
        permanent: true,
      },
      {
        source: '/projects',
        has: [{ type: 'query', key: 'tab', value: 'early-work' }],
        destination: '/projects#academic',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
