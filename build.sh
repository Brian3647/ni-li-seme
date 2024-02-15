#!/bin/bash

rm -rf dist/*
mkdir -p dist

bun build src/content.ts --outfile=dist/content.js --minify --target=browser

cpdist() {
	for file in $@; do
		cp $file dist/ -r
	done
}

cpdist src/*.html manifest.json assets/*

bun x tailwindcss build -i src/styles.css -o dist/tailwind.css
