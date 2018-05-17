#!/bin/sh

echo Creating pcf distribution...
rm -rf pcfdist
mkdir pcfdist
cp -r dist pcfdist
cp package.json pcfdist
cp -r node_modules pcfdist
rm -rf pcfdist/node_modules/.cache
echo PCF distribution ready.