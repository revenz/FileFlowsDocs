---
title: Video Nodes > FFMPEG Builder > Video Encode
permalink: /plugins/video-nodes/ffmpeg-builder/video-encode
name: Video Encode
layout: default
plugin: Video Nodes
sub: FFMPEG Builder
---

{% include node.html input=1 outputs=1 icon="far fa-file-video" name="FFMPEG Builder: Video Encode" type="BuildPart" %}

This node will ALWAYS encode a video to the quality level and codec specific.

## Options
### Codec
The codec used to encode the video.

### Hardware Encoding
When checked, will test to see if hardware encoders are found on the Processing Node, and if found will use hardware encoding, otherwise will fallback to CPU encoding.
Hardware encoder order:
* NVIDIA
* QSV (Intel)
* AMD (AMF)
* VAAPI
* CPU (fallback)

### Quality
A logarithmic quality scale, so small changes in the this slider cause large changes in file size/quality.
The lower the number the higher the quality.

#### H.264 Quality
Default: 23
Range: 0 - 51
0: Lossless
51: Maximum compression, worst quality
17 - 28: Range that should be used.   17-18 should provide produce visually lossless video
NVIDIA: -rc constop -qp {QualityValue} -preset p6 -spatial-aq 1
QSV: -qp {QualityValue} -preset slower
AMD: -qp {QualityValue} -preset slower -spatial-aq 1
VAAPI: -qp {QualityValue} -preset slower -spatial-aq 1
CPU: -preset p6 -crf {QualityValue}

#### H.265 Quality
Default: 28
Range: 0 - 51
0: Lossless
51: Maximum compression, worst quality
23 - 32: Range that should be used. 
NVIDIA: -rc constop -qp {QualityValue} -preset p6 -spatial-aq 1
QSV: -qp {QualityValue} -preset slower
AMD: -qp {QualityValue} -preset slower -spatial-aq 1
VAAPI: -qp {QualityValue} -preset slower -spatial-aq 1
CPU: -preset p6 -crf {QualityValue}