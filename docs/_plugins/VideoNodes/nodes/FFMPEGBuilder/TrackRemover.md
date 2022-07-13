---
title: Video Nodes > FFMPEG Builder > Track Remover
permalink: /plugins/video-nodes/ffmpeg-builder/track-remover
name: Track Remover
layout: default
plugin: Video Nodes
sub: FFMPEG Builder
---

{% include node.html input=1 outputs=2 icon="fas fa-eraser" name="FFMPEG Builder: Track Remover" type="BuildPart" %}

This node will update "FFMPEG Builder" to remove all the matching tracks from the output file.  

It will only mark the current tracks in the "FFMPEG Builder" for removal, so any tracks added later will NOT be affected.


#### Tip: Remove Images
You can have this node remove images from a video file but setting the type to "Video" and the remove after index to "1".  
This will keep the first video track, but then remove the rest.   FFMPEG treats images as a video track.

### Type
The type of tracks that should be reordered

### Remove All
When this is checked all current tracks will be removed from the output file.  This is useful if you want to have a file with only specific tracks.

### Pattern
This is a regular expression that will be run against the title or language code of the track.

The pattern is NOT case-sensitive.

### Use Language Code
When this is checked it will use the language code of the track, else it will use the title of the track.


### Remove Non-English Tracks Example
![image](https://user-images.githubusercontent.com/958400/164949105-c434f247-902b-44e3-ab2f-acdf9e2a8af5.png)
