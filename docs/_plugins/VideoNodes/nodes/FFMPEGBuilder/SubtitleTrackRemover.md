---
title: Video Nodes > FFMPEG Builder > Subtitle Track Remover
permalink: /plugins/video-nodes/ffmpeg-builder/subtitle-track-remover
name: Subtitle Track Remover
layout: default
plugin: Video Nodes
sub: FFMPEG Builder
---

{% include node.html input=1 outputs=2 icon="fas fa-comment" name="FFMPEG Builder: Subtitle Track Remover" type="BuildPart" %}


This node will remove subtitles based on a regular expression pattern, or the inverse if "Not Matching" is checked.   

### Use Language
When this is checked it will use the language code of the subtitle, else it will use the title of the subtitle.

If a subtitle has no language and this is checked then that subtitle will not match the pattern.  If "Not Matching" is checked then this subtitle will be kept, else it will be removed.

### Pattern
This is a regular expression that will be run against the title or language code of the subtitle track.    
The pattern is NOT case-sensitive.

### Remove Non-English Subtitle Example
If you wanted to remove all non-English subtitle tracks you could use this:
![image](https://user-images.githubusercontent.com/958400/164948627-b7e1ef69-0020-43dc-af35-be0bcef9268f.png)



### Remove "Commentary" Subtitle Example
If you wanted to remove all subtitles tracks that had the word "commentary" in them you could use this:
![image](https://user-images.githubusercontent.com/958400/164948681-b5136144-d481-40c2-9773-0ea839d1208b.png)


Remember this node will REMOVE so the conditions you enter are for what you want to be removed.   