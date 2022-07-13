---
title: Video Nodes > FFMPEG Builder > HDR to SDR
permalink: /plugins/video-nodes/ffmpeg-builder/hdr-to-sdr
name: HDR to SDR
layout: default
plugin: Video Nodes
sub: FFMPEG Builder
---

{% include node.html input=1 outputs=2 icon="far fa-file-video" name="FFMPEG Builder: HDR to SDR" type="BuildPart" %}

This node will first check to see if the working file is HDR.

If it is not HDR, output 2 will be called and the node will finish.

If it is HDR, an HDR to SDR filter will be applied to the first video stream of the file, and output 1 will be called.

Nothing will be processed until the "FFMPEG Builder: Executor" is called.