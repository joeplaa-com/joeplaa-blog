#!/bin/bash
# required dependencies: aws-cli, git, node, yarn

# Browse to base/main folder.
cd ../../

# Checkout "develop" branch
git checkout master
git pull

# Install dependencies
yarn install

# Build website
yarn deploy