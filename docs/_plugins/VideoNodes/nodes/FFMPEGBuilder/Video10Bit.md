---
title: Video Nodes > FFMPEG Builder > Video 10 Bit
permalink: /plugins/video-nodes/ffmpeg-builder/video-10-bit
name: Video 10 Bit
layout: default
plugin: Video Nodes
sub: FFMPEG Builder
---

{% include node.html input=1 outputs=1 icon="far fa-file-video" name="FFMPEG Builder: Video 10 Bit" type="BuildPart" %}

This node will add a parameter to the first video stream to encode in 10BIt.

This parameter is considered an optional parameter, and will only be executed if the video stream will have an [FFMPEG Builder: Video Codec](https://github.com/revenz/FileFlows/wiki/FFMPEG-Builder:-Video-Codec) applied to it as well.