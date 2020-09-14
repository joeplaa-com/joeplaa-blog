#!/bin/bash
# required dependencies: aws-cli, git, node, yarn

# Browse to folder. Change this to you own location
cd ../../

# Checkout develop branch
git checkout develop
# or a feature branch
#git checkout feature/...
git pull

# Set correct environment variables
mv .env.production .env.production.backup
cp .env.test .env.production

# Install dependencies
yarn install

# Build website
rm -rf .next/* out/*
yarn build

# Publish website to Nginx
# TEST (test.jodibooks.com):
scp -r out/* jodibooks@192.168.178.156:/var/www/test-blog-joeplaa

# Restore environment variables
mv .env.production.backup .env.production