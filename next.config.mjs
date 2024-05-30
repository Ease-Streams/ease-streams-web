const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "yellow-pages-bahrain-stage.s3.me-south-1.amazonaws.com",
        port: "",
        pathname: "/*/**",
      },
    ],
  },
};

export default nextConfig;
