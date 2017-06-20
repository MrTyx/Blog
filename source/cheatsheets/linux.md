---
title: Linux Cheatsheet
---

|System Information||
|-|-|
|General information|`uname -a`|
|Hardware information|`sudo lshw [-short]`|
|CPU information|`lscpu`|
|Block device information|`lsblk [-a]`|
|USB controller information|`lsusb [-v]`|
|64 bit or 32 bit|`getconf LONG_BIT`|
|Ubuntu version|`cat /etc/lsb-release`|

|File management||
|-|-|
|View folder size|`du -sh /foo`|
|View disk usage|`df -h`|
|View files sorted by size|`du -sh * ` &#124; `sort -h`|

|Process management||
|-|-|
|List all|`ps auxww -H`|
|PID by name|`pidof foo`|
|Kill by name|`pkill NAME`|
|Run in background nicely|`nohup nice ./foo &`|
|Nohup for remote SSH|`nohup nice ./foo > foo.out 2> foo.err < /dev/null &`|

|Networking||
|-|-|
|View IP/Ethernet info|`ip addr` or `ifconfig`|
|Shut / Noshut port|`sudo ifconfig eth0 [up` &#124; `down]`|
|List TCP sockets|`lsof -nPi tcp`|
|Show traffic by port|`iftop`|
|View TCP traffic on specific port|`sudo tcpdump -i eth0 port $PORT -XX`|
