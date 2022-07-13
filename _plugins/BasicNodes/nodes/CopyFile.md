---
name: Copy File
title: Copy File
permalink: /plugins/basic-nodes/copy-file
layout: default
plugin: Basic Nodes
toc: true
---

{% include node.html input=1 outputs=1 icon="far fa-copy" name="Copy File" type="Process" %}

Copies a file to the destination folder

## Fields

### Destination Folder
The folder where the file will be copied to.

### Destination File
The filename to copy the file to.  If empty, the original filename will be used.

### Copy Folder
If the folder structure relative to the library should also be copied.

For example, if the library is /media/tv and the file is /media/tv/my show/season 1/myshow.mkv and the destination folder is /copyloc. 

If Copy Folder is selected the file will be copied to /copyloc/my show/season 1/myshow.mkv

### Additional Files
Any additional files that should be copied with the file, eg if you want to copy an nfo or sub file with it.

### Original Directory
When checked the "Additional Files" will be copied from the original library directory, otherwise they will be copied from the current working directory (i.e. the temporary directory if the file has been processed and created a temporary file).