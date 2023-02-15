/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate");

module.exports = {
  target: 'serverless',
  reactStrictMode: false,
  ...nextTranslate(),
}