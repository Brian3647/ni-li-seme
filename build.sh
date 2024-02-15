#!/bin/bash

mkdir -p dist
bun build src/index.ts --outfile=dist/index.js --minify --target=browser
mv src/*.html dist/
