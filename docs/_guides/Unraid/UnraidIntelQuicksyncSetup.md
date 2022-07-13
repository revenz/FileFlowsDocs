---
title: Unraid Intel Quicksync (QSV) Setup
name: Unraid Intel Quicksync Setup
permalink: /guides/unraid/intel-quicksync-setup
layout: default
sub: Unraid
---


This guide details how to set up and configure Intel's Quick Sync (QSV) on Unraid.

### 1. Install "Intel-GPU-Top"
First, you need to install "Intel-GPU-Top" from the Unraid Community App store

![image](https://user-images.githubusercontent.com/958400/170898889-7a3a0a6d-9b8e-4926-b14d-87a85010668f.png)

No configuration for this application is needed and it just enables the drive for Intel's Quicksync

### 2. Confirm "Intel-GPU-Top" Install Drivers
Open a terminal for unRAID
```
cd /dev/dri
ls
```
You should then see some items listed, e.g.

![image](https://user-images.githubusercontent.com/958400/170899038-b9b212df-0ceb-4553-95e5-f492d8f6f29d.png)


### 3. Edit FileFlows Container
Edit your main FileFlows container or a FileFlows Node container if configuring a processing node.

![image](https://user-images.githubusercontent.com/958400/170899290-8f925632-f615-4db0-b9ae-88cd2883b9b3.png)

Turn on "Advanced View"

![image](https://user-images.githubusercontent.com/958400/170899323-8b8bad69-68c3-4f54-80d2-a21c379339c6.png)

![image](https://user-images.githubusercontent.com/958400/170899335-3dafe39c-6961-4ec9-9f6e-50d405bc61e7.png)

Under "Extra Parameters" paste in the value
```
--device=/dev/dri
```

![image](https://user-images.githubusercontent.com/958400/170899458-71d71424-f091-450d-a197-c88fb91e15de.png)

Click "Apply" to save the configuration and restart the container.

### Finished
You should now be able to use QSV hardware encoding in FileFlows.