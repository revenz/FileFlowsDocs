---
title: Video Nodes > FFMPEG Builder > Crop Black Bars
permalink: /plugins/video-nodes/ffmpeg-builder/crop-black-bars
name: Crop Black Bars
layout: default
plugin: Video Nodes
sub: FFMPEG Builder
---

{% include node.html input=1 outputs=2 icon="far fa-file-video" name="FFMPEG Builder: Crop Black Bars" type="BuildPart" %}

This node will scan the video file when first called and detect if black bars are present at intervals of 60 seconds, 120 seconds, 240 seconds, and 360  seconds.

If black bars are detected, it will look for the minimum black bars at those intervals.   This way if it accidentally comes across a title screen where it's mostly black screen with just some minor white text, this will not crop the video inappropriately.

Processing is done when this node is first called just to do the scan, no cropping will be done until the "FFMPEG Builder: Executor" is called.

If black bars are detected, it will use the "Threshold" value to determine if the amount of black lines is over that threshold.  E.g. if the resolution is detected at 1920x1000 and the original resolution is 1920x1080, aslong as the threshold is below 80 black bars will be removed.

If they are detected and above the threshold, the FFMPEG Builder will have a filter applied to the video stream and once executed the video will be cropped.

### Outputs
* Output 1: Black bars were detected
* Output 2: Black bars were not detected or not above the threshold.