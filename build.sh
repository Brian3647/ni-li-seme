#!/bin/bash

mkdir -p dist

bun build src/index.ts --outfile=dist/index.js --minify --target=browser

cpdist() {
	for file in $@; do
		cp $file dist/ -r
	done
}

cpdist src/*.html src/*.css manifest.json assets/*
