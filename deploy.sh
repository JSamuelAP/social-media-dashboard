#!/usr/bin/env sh

# abort on errors
set -env

#build
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyill processing
echo > .nojekyll

# deploying to https://jsamuelap.github.io/social-media-dashboard
git push -f git@github.com:jsamuelap/social-media-dashboard.git main:gh-pages

cd -