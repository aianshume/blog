/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin')

const withVanillaExtract = createVanillaExtractPlugin()

const baseUrl = ''

module.exports = withVanillaExtract(
  withBundleAnalyzer({
    poweredByHeader: false,
    trailingSlash: true,
    basePath: baseUrl,
    env: {
      baseUrl,
    },
    reactStrictMode: true,
  })
)
