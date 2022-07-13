---
title: Video Nodes > FFMPEG Builder > Audio Normalization
permalink: /plugins/video-nodes/ffmpeg-builder/audio-normalization
name: Audio Normalization
layout: default
plugin: Video Nodes
sub: FFMPEG Builder
---

{% include node.html input=1 outputs=2 icon="fas fa-volume-up" name="FFMPEG Builder: Audio Normalization" type="BuildPart" %}

This node will normalize audio against the matching tracks in the output file.

### Two Pass
When checked, the source audio track will be scanned when this node is executed, and build a filter for that track to normalize the track.  If multiple output tracks use the same source track, they will reuse the filter and not reanalyzed the source track.

So for example, if you remove all audio, add AC3, add AAC then normalize.  The source track for AC3 and AAC will be the same, so the audio normalization analysis will only need to be run once.

### Single Pass
Single pass requires no additional processing and it will use the filter loudnorm=I=-24:LRA=7:TP=-2.0
This will provide decent results but not as good as running a two pass.

### All Audio Tracks
When this is checked all audio tracks will be normalized.

### Pattern
This is a regular expression that will be run against the title, language code, and codec of the audio track.

The pattern is NOT case-sensitive.

### Not Matching
This will inverse the match

### Outputs
1. Audio tracks matched the parameters and will be normalized
2. Audio tracks did not match and no normalizing will occur