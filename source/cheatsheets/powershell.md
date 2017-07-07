---
title: Powershell
---

# Powershell
## System
* View environment variables
	`Get-ChildItem Env:`
* Running processes
	`Get-Process`

## File management
* Find files
	`Get-ChildItem | Where-Object { $_.Name.StartsWith("FOO") -and $_.Length -gt 10mb }`
