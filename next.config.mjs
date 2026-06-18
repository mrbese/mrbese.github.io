/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for GitHub Pages (served from mrbese.github.io → mrbese.com).
  output: "export",
  reactStrictMode: true,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
