#!/bin/bash
# required dependencies: aws-cli, git, node, yarn

# Browse to base/main folder.
cd ../../

# Checkout "develop" branch
git fetch
git checkout styling-alerts
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
#scp -i ~/.ssh/joeplaa-worker -r public/* jodibooks@192.168.178.156:/var/www/test-blog-joeplaa-com
# doing this manually using WinSCP (SFTP) is much faster

# Restore environment variables
mv .env.production.backup .env.production