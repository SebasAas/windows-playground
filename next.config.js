/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')

const nextConfig = {
  reactStrictMode: true
}

module.exports = withPWA ({
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV === "development" 
  },
  nextConfig
})