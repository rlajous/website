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
    ];
  },
};

export default nextConfig;
