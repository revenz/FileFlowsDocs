---
title: External Processing Node
name: External Processing Node
permalink: /guides/external-processing-node
layout: default
---

An external processing node, allows you to share or off loading the processing of files onto multiple systems, or a more powerful system.

---

## Temporary Directory
This is the location where the node will create temporary files.  These files are only accessed by the node and the server does not need to access this directory.

---

## Mapping
When you create a library, the path to that library is relative to the server.  If this path is not accessible on the node via the same path, you must map that location to somewhere accessible on the node.

For example, a library file of "/media/tv/myshow/season 1/myshow.mkv" would need to be mapped to a location the external processing node could access the file from.

If your external processing node was a Windows machine and accesses that location via a network share of \\\\myserver\\tv.  

You would need to configure a mapping of
- Server: /media/tv
- Node: \\\\myserver\\tv

Then that external processing node could access the library file from \\\\myserver\\tv\\myshow\\season 1\\myshow.mkv.

---

### Copy to, Move To 
Additional to libraries, you may have a [Copy File](/plugins/basic-nodes/copy-file) or [Move File](/plugins/basic-nodes/move-file) and their locations must also be mapped.

E.g. if you use a [Copy File](/plugins/basic-nodes/copy-file) to copy the file to /media/tv-processed and that location is accessible \\\\myserver\\tv-processed, you must make a mapping
- Server: /media/tv-processed
- Node: \\\\myserver\\tv-processed

---

### Tools 
Tools also need to be mapped if they are accessible via different locations.

If you are using Docker for both the Node and Server the tools will be accessible in the same locations, and do not need to be mapped.

But if you are using Docker as the Server and Ubuntu as the node, you must map the tool.  

For example, to map FFMPEG, if FFMPEG was installed to /home/myuser/ffmpeg/ffmpeg, your mapping would be:

- Server: /usr/local/bin/ffmpeg
- Node: /home/myuser/ffmpeg/ffmpeg


