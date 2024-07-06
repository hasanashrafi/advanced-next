/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      { source: "/js", destination: "/languages", permanent: true },
      { source: "/react", destination: "/next", permanent: true },

    ]
  }
};

export default nextConfig;
