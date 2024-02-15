#!/bin/bash

mkdir -p dist
bun build src/index.ts --outfile=dist/index.js --minify --target=browser
cp src/*.html dist/
cp src/*.css dist/
cp manifest.json dist/
