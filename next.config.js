/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate");

module.exports = {
  reactStrictMode: false,
  ...nextTranslate(),
  images: {
    domains: ['external-content.duckduckgo.com', 'news.stanford.edu', 'miro.medium.com', 'static.wikia.nocookie.net'],
  },
}