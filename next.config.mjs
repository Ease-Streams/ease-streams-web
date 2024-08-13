const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [""],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "yellow-pages-bahrain-stage.s3.me-south-1.amazonaws.com",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "cpanel.restaurants-uae.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
