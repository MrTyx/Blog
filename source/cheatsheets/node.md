---
title: NodeJS Cheatsheet
---



node -c script.js
  check for syntax errors
node -p "process.arch"
  32 or 64 bit?
node -p "os.cpus()"

node -p "process.env"


# NodeJS
## System
* Package Help Docs
	`npm docs`
* Command Help Docs
	`npm help $COMMAND`
* Search NPM Help Docs
	`npm help-search $STRING`
* Install Tab completion
	`npm completion >> ~/.bashrc`

## Node Env
* CMD
	`set NODE_ENV=production && npm start`
* Powershell
	`$env:NODE_ENV="production" -and npm start `
* Bash
	`export NODE_ENV=production && npm start`
* Cross-env
	`cross-env NODE_ENV=production $COMMAND && npm start`

## Packages
* View installed
	`npm ls --depth 0 [-g]`
* Update recursively
	`npm --depth 9999 update`
* Github for package
	`npm repo $PACKAGE`

## Run script defaults
|command|no run defaults to|
|-|-|
|npm start|node server.js|
|npm stop|-|
|npm restart|npm stop && npm start|
|npm test|-|
