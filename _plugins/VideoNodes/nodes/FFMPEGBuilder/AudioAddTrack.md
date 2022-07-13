---
title: Video Nodes > FFMPEG Builder > Audio Add Track
permalink: /plugins/video-nodes/ffmpeg-builder/add-audio-track
name: Audio Add Track
layout: default
plugin: Video Nodes
sub: FFMPEG Builder
---

{% include node.html input=1 outputs=1 icon="fas fa-volume-off" name="FFMPEG Builder: Add Add Track" type="BuildPart" %}

This node will add a new audio track to "FFMPEG Builder".

It will find the best source track (even from ones marked as deleted by previous nodes) to create this new track.

It looks first at language (if specified), then at the number of channels, then by the original order of the tracks in the working file.

It will insert this new track at the index specified.  If the index specified is greater than the number of tracks it will be added as the last track.

### AC3, AAC Example
If you wanted to only have an AC3 and AAC tracks on your output file, you could
1. Use [FFMPEG Builder: Audio Track Remover](https://github.com/revenz/FileFlows/wiki/FFMPEG-Builder:-Audio-Track-Remover) and select to remove all
2. Add a new instance of "FFMPEG Builder: Audio Add Track" with Index set to 0, codec set to AC3, Channels set to "Same as source", Bitrate set to "Automatic"
3. Add a new instance of "FFMPEG Builder: Audio Add Track" with Index set to 1, codec set to AAC, Channels set to "Same as source", Bitrate set to "Automatic"

![image](https://user-images.githubusercontent.com/958400/164949174-b399abc4-9475-4a07-9877-d9e7a26cdab5.png)
