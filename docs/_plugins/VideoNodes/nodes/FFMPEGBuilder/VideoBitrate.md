---
title: Video Nodes > FFMPEG Builder > Video Bitrate
permalink: /plugins/video-nodes/ffmpeg-builder/video-bitrate
name: Video Bitrate
layout: default
plugin: Video Nodes
sub: FFMPEG Builder
---

{% include node.html input=1 outputs=1 icon="far fa-file-video" name="FFMPEG Builder: Video Bitrate" type="BuildPart" %}

Sets FFMPEG Builder to encode the video given the bitrate

#### Bitrate
The target bitrate of the video in kilobytes.   Or if Percent is checked, the percentage of the working file's bitrate.  For example, if set to 50% and the working file bitrate is 6000Kbps, the new files bitrate will be 3000Kbps.

#### Percent
When selected the bitrate will be calculated as a percentage of the current bitrate.
