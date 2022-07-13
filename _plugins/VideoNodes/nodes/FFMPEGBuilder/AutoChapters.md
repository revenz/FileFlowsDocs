---
title: Video Nodes > FFMPEG Builder > Auto Chapters
permalink: /plugins/video-nodes/ffmpeg-builder/auto-chapters
name: Auto Chapters
layout: default
plugin: Video Nodes
sub: FFMPEG Builder
---

{% include node.html input=1 outputs=2 icon="far fa-file-video" name="FFMPEG Builder: Auto Chapters" type="BuildPart" %}

This node will first determine if the video file has chapters.   If it does, it will call Output 2 and exit.

If none are detected, it will scan the video file looking for scene changes using the "Percentage" value to determine what is considered a scene change, a good value here is 45 but your mileage may vary.   If will build a list of scene changes skipping any that are less than the "Minimum Length" since the last chapter.

It will then create a new metadata file and update the "FFMPEG Builder" to use this metadata file to add chapters.

### Outputs
1. Chapters were detected and a new metadata file was created for the "FFMPEG Builder"
2. No chapters were detected