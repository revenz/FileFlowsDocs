---
title: Video Nodes > FFMPEG Builder > Subtitle Track Merge
permalink: /plugins/video-nodes/ffmpeg-builder/subtitle-track-merge
name: Subtitle Track Merge
layout: default
plugin: Video Nodes
sub: FFMPEG Builder
---

{% include node.html input=1 outputs=2 icon="fas fa-comment-medical" name="FFMPEG Builder: Subtitle Track Merge" type="BuildPart" %}


This node will search for external subtitles and add them as input files to the FFMPEG Builder.  Then once run these external subtitles will be part of the output video file.

![image](https://user-images.githubusercontent.com/958400/167319446-523eb0a4-88be-4526-9d98-eb998edf9e46.png)


### Options
#### Subtitles
The subtitles to search for to add

#### Use Source Directory
If checked the original source directory will be searched, otherwise the working directory will be used.

### Match Filename
When checked only subtitles with the same filename as the input file or the working file will be merged.

For example,
Input: MyFile.mkv
Match: MyFile.srt
Not Match: OtherFile.srt

### Outputs
1. Subtitles found and added
2. Subtitles not found