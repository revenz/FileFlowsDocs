---
title: Video Nodes > FFMPEG
permalink: /plugins/video-nodes/ffmpeg
name: FFMPEG
layout: default
plugin: Video Nodes
---

{% include node.html input=1 outputs=1 icon="far fa-file-video" name="FFMPEG" type="Process" %}

FFMPEG is a node that lets you run a custom FFMPEG command against the file.

This is intended for advanced users, and the more user friendly specific video nodes should generally be used.

Command Line:
- {WorkingFile} = this will be replaced by the Working File in the node, i.e. the file that is currently being processed
- {TempDir} = this is the temporary directory of the system, this is where a file should generally be saved to

For more information on the FFMPEG command line options see the [FFMPEG documentation](https://ffmpeg.org/ffmpeg.html).
