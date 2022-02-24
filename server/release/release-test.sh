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
# Make sure you have the private key `jpl-nginx` stored in your user folder: `~/.ssh/jpl-nginx`.
rsync -ahz --delete -e "ssh -i ~/.ssh/jpl-nginx" public/ joeplaa@jpl-nginx:/var/www/test-blog-joeplaa-com

# Restore environment variables
mv .env.production.backup .env.production