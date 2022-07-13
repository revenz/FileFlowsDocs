---
title: Video Nodes > FFMPEG Builder > Comskip Chapters
permalink: /plugins/video-nodes/ffmpeg-builder/comskip-chapters
name: Comskip Chapters
layout: default
plugin: Video Nodes
sub: FFMPEG Builder
---

{% include node.html input=1 outputs=2 icon="far fa-file-video" name="FFMPEG Builder: Comskip Chapters" type="BuildPart" %}

This node will look for a comskip .edl file matching the working file.   eg
`
/media/movies/mymovie.mkv
/media/movies/mymovie.edl
`
If found, it will then read this file and create a chapters metadata file at the times specified in that .edl file.   It will then update "FFMPEG Builder" to include this metadata file when "FFMPEG Builder: Executor" is called and the output file will have chapters at these points.

The only processing that happens in this node is reading the .edl file and creating a text metadata file.  

### Outputs
1. A .edl file was found with chapters and a metadata file has been created
2. No .edl file or no chapters were found.