---
title: Video Nodes > FFMPEG Builder > Audio Adjust Volume
permalink: /plugins/video-nodes/ffmpeg-builder/audio-adjust-volume
name: Audio Adjust Volume
layout: default
plugin: Video Nodes
sub: FFMPEG Builder
---

{% include node.html input=1 outputs=1 icon="fas fa-volume-up" name="FFMPEG Builder: Audio Adjust Volume" type="BuildPart" %}

This node will update "FFMPEG Builder" and adjust the volume by percentage of all currently known audio tracks that match the conditions.

### Volume Percent
The percent of the original volume the new volume should be.  If this is set to 100, then nothing will happen.  If set to 0 then the audio will become muted.  200 the audio will be twice as loud etc.


### All Audio Tracks
When this is checked all audio tracks will have their volume adjusted and the pattern will not be used.

### Pattern
This is a regular expression that will be run against the title or language code of the audio track.

The pattern is NOT case-sensitive.

### Not Matching
This will inverse the match