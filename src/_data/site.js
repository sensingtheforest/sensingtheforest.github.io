const isDev = process.env.ELEVENTY_ENV === 'development';
module.exports = {
  baseUrl: isDev ? 'localhost:8080' : 'https://sensingtheforest.github.io'
}