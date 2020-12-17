#!/bin/bash
# required dependencies: aws-cli, git, node, yarn

# Browse to base/main folder.
cd ../../

# Checkout "develop" branch
git fetch
git checkout master
git pull

# Set correct environment variables
mv .env.production .env.production.backup
cp .env.test .env.production

# Install dependencies
yarn install

# Build website
yarn clean
yarn build

# Publish website to Nginx
# TEST (test.www.joeplaa.com):
scp -r public/* jodibooks@192.168.178.156:/var/www/test-blog-joeplaa-com

# Restore environment variables
mv .env.production.backup .env.production