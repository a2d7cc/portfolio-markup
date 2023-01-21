/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg/,
      use: [{
        loader: '@svgr/webpack',
        options: {
          icon: true,
          prettier: true,
          svgo: true,
          titleProp: true,
          ref: true,
        }
      }]
    })

    return config
  },
}


/* 
          prettier: true,
          svgo: true,
          titleProp: true,
          ref: true,
 */

module.exports = nextConfig
