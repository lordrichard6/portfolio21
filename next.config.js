/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate");

const nextConfig = {
  // basePath: '/',
  reactStrictMode: false,
  ...nextTranslate(),
}

module.exports = nextConfig