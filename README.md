rm -rf node_modules package-lock.json
npm install
npm run build
npm run dev

node sitemap-generator.js
