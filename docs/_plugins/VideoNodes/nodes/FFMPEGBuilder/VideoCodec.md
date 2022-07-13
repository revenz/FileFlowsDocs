---
title: Video Nodes > FFMPEG Builder > Video Codec
permalink: /plugins/video-nodes/ffmpeg-builder/video-codec
name: Video Codec
layout: default
plugin: Video Nodes
sub: FFMPEG Builder
---

{% include node.html input=1 outputs=2 icon="far fa-file-video" name="FFMPEG Builder: Video Codec" type="BuildPart" %}

This node will set all video streams in the file to encode using the video codec specified and the encoding parameters specified.

### Magic Values
You can set the codec to these magic values and leave the parameters blank.
* h265 | hevc
  * If this is set, the flow executor will determine if the Flow Runner can first hardware encoding in this order hevc_nvenc (NVIDIA GPUs), hevc_qsv (Intel), hevc_amf (AMD), hevc_vaapi.  If not it will fall back to using CPU encoding of H265/HEVC.
* h264
  *  If this is set, the flow executor will determine if the Flow Runner can first hardware encoding in this order h264_nvenc (NVIDIA GPUs), h264_qsv (Intel), h264_amf (AMD), h264_vaapi.  If not it will fall back to using CPU encoding of H264.

### Force
When force is checked, the video will be forced encoded even if it was already in the desired codec.

### DisableOtherVideoStreams
When checked the first video stream will be used and the other will be disabled.   This should be set to true in most cases unless you really want to keep multiple video streams.

### Outputs
* Output 1: The video was update and encoding was set on the file
* Output 2: The video was already in the required codec or no appropriate video streams were found.
