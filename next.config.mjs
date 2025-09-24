/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/serverless_aws",
  assetPrefix: "/serverless_aws/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
