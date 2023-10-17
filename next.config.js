/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm)$/, // Add any other video file extensions you need
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/videos/', // Adjust the path as needed
          outputPath: 'static/videos/', // Adjust the path as needed
        },
      },
    })
    return config
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
