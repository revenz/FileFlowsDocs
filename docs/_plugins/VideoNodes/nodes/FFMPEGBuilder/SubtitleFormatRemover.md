---
title: Video Nodes > FFMPEG Builder > Subtitle Format Remover
permalink: /plugins/video-nodes/ffmpeg-builder/subtitle-format-remover
name: Subtitle Format Remover
layout: default
plugin: Video Nodes
sub: FFMPEG Builder
---

{% include node.html input=1 outputs=2 icon="fas fa-comment" name="FFMPEG Builder: Subtitle Format Remover" type="BuildPart" %}

This node will update the "FFMPEG Builder" to remove subtitles that are in the desired format,  or "All" if that is checked, in the final output file.

Nothing is processed until the "FFMPEG Builder: Executor" is called.

Only subtitles that are currently known when this node is called will be removed.  If another node then adds a subtitle, that subtitle will not be removed by this node.

### Outputs
1. Subtitles were found and marked for removal
2. Subtitles were not found and not marked for removal