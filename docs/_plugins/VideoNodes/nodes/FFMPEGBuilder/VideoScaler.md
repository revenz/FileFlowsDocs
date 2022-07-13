---
title: Video Nodes > FFMPEG Builder > Video Scaler
permalink: /plugins/video-nodes/ffmpeg-builder/video-scaler
name: Video Scaler
layout: default
plugin: Video Nodes
sub: FFMPEG Builder
---

{% include node.html input=1 outputs=2 icon="far fa-file-video" name="FFMPEG Builder: Video Scaler" type="BuildPart" %}


This node will rescale the video to the desired resolution.

It will compare if the file is already in that resolution, or near it (in case black bars are being trimmed etc), and if it's near the desired resolution it will not be scaled.

However, if "Force" is enabled, it will force the file into the resolution specified.  

When scaling it keeps the height in the same ratio as the original file and scales based on width, so it will not stretch a video's height but rather scale it the same amount the width has been scaled to maintain the original aspect ratio.

Nothing is processed in this node, and the video will be scaled once the "FFMPEG Builder: Executor" is called.

### Outputs
1. The video will be scaled
2. The video will not be scaled as it was in or near the desired resolution.

### Near resolution
If the width is between these values it will be considered that resolution already:
- 4k: 3780 and 3900 
- 1080p: 1860 and 1980
- 720p: 1220 and 1340
- 480p: 600 and 700
It uses the width to determine resolution because the height may have been cut for black bars, but the width should remain the same.