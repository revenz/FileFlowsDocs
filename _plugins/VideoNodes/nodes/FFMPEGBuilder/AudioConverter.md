---
title: Video Nodes > FFMPEG Builder > Audio Converter
permalink: /plugins/video-nodes/ffmpeg-builder/audio-converter
name: Audio Converter
layout: default
plugin: Video Nodes
sub: FFMPEG Builder
---

{% include node.html input=1 outputs=2 icon="fas fa-comments" name="FFMPEG Builder: Audio Converter" type="BuildPart" %}

This node will normalize audio against the matching tracks in the output file.

### Codec
The codec to use to encode the audio

### Channels
The number of channels this new audio track will be.
If you specify more channels than the source, FFMPEG will automatically upmix it.
If you specify fewer channels than the source, FFMPEG will automatically down mix it.

### Bitrate
Bitrate of the audio track

### Pattern
This is a regular expression that will be run against the title, language code, and codec of the audio track.

The pattern is NOT case-sensitive.

### Not Matching
This will inverse the match

### Use Language Code
If the language code of the track should be used instead of the title

### Outputs
1. Audio tracks matched the parameters and will be normalized
2. Audio tracks did not match and no normalizing will occur