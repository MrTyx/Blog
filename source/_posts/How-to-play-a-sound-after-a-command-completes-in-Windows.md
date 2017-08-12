---
title: How to play a sound after a command completes in Windows
date: 2017-08-08 15:56:23
tags: Windows
---

A simple way to play a sound after a long running command completes in Windows.

<!--more-->

I have been reading guides on playing a terminal bell in CMD. Supposedly "echo ^G" works, but I haven't any success. Which was fine because the bell sound wasn't exactly the sound I wanted anyway. Here is the simplest solution. First browse to %windir%\Media and find a sound you like. I choose %windir%\Media\tada.wav

Next create a batch file like below and store it somewhere such that it is accessibly by the PATH environment variable. In my case, I have a C:\bin folder which I have saved below as ding.bat (get it... dingbat.. hilarious I know).

```
powershell -c (New-Object Media.SoundPlayer "%windir%\Media\tada.wav").PlaySync();
```

Why Powershell? Because I want something that plays an audio file without opening a new window. And some of the guides recommend installing mplay32 which I think is unnecessary if Powershell does what I need. Commandline VLC (cvlc) would also be a good alternative if you don't have Powershell installed.

Ok, now test it by Win+R and running "ding". If that works, you can use such that;

```
update && ding
```

Now you have a simple piece of code that you can add to a large process chain. For example, I have a batch file for downloading youtube videos.

```
youtube-dl %* -o %USERPROFILE%"\Desktop\%%(title)s.%%(ext)s" && ding && exit
```

To use, hit Win+R and type "dl https://www.youtube.com/watch?v=9bZkp7q19f0". Easy.
