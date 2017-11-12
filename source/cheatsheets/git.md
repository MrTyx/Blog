---
title: GIT
---


# Git
## Fix HTTP to SSH
```bash
git remote -v
git remote set-url origin git@github.com:MrTyx/REPOSITORY.git
```

## Globals
```bash
git config --global user.name "MrTyx"
git config --global user.email "camerontyrel@gmail.com"
git config --global color.ui auto
```

## Summary Update
```bash
git remote update
git status -v
git diff --name-only origin master
git pull
```

## Other
* Change filename `git mv CURRENT NEW_FILENAME`
* File history `git log --follow FILENAME`
