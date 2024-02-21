rm -rf docs
rm -rf img
npm ci
npm run build
mv img docs