#!/bin/sh
export RELEASE=`date +%s`
rm -rf ./dist
./node_modules/.bin/sentry-cli releases new $RELEASE
./node_modules/.bin/tsc
./node_modules/.bin/sentry-cli releases files $RELEASE upload-sourcemaps ./dist --rewrite
./node_modules/.bin/sentry-cli releases finalize $RELEASE
node ./dist/index.js
