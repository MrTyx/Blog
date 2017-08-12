---
title: Windows CMD
---

start .

# CMD
## System Information
* System information
	`systeminfo`
* Network interface information
	`netsh interface ip show config`
* Network routes
	`route print`
* Running processes
	`tasklist`
* Environment variables
	`set`
* User accounts
	`net user`

## Robocopy
* Format
	`robocopy SOURCE DESTINATION`
* Common flags
	* Dual-output
		`/TEE`
	* Mirror
		`/MIR`
	* Test
		`/L`
	* Log file
		`/LOG:file`
	* No job header
		`/NJH`
	* No job summary
		`/NJS`
	* No progress
		`/NP`

## Other
* Unset environment variable
	`set FOO=`
* Open network connections
	`ncpa.cpl`
