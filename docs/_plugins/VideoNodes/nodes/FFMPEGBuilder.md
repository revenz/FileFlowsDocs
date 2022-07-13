---
title: Video Nodes > FFMPEG Builder
permalink: /plugins/video-nodes/ffmpeg-builder
name: FFMPEG Builder
layout: default
plugin: Video Nodes
subs: true
---


The FFMPEG Builder is part of the Video Nodes plugin.

This lets the user break down a complex FFMPEG command into easy to configure nodes and will build up a command that can be executed at once.

This allows the user to for example convert video to HEVC, add an AC3 audio track, copy all subtitles and normalize the audio.

The FFMPEG builder will parse the Video File and build a list of all streams in a file.  If a stream has not been explicitly set to delete, or a codec conversion has been set, that stream will by default be copied to the new file.

So that means, if you have not done anything with subtitles, for example, all the subtitles from the original file will be copied to the output file.

***

### FFMPEG Builder: Start
{% include node.html input=1 outputs=1 icon="far fa-file-video" name="FFMPEG Builder: Start" type="BuildStart" %}

The FFMPEG Build must first begin with the "FFMPEG Builder: Start" node.   This node is what constructs the builder and parses the video information for the builder.

***

### FFMPEG Builder: Executor
{% include node.html input=1 outputs=1 icon="far fa-file-video" name="FFMPEG Builder: Executor" type="BuildEnd" %}

The final part of the FFMPEG Builder is the "FFMPEG Builder: Executor" this is what takes the FFMPEG Builder, constructs into into a command for FFMPEG and executes it.
If will not execute, output 2, if nothing has been detected as needing to be executed.   If will return an output of -1 if the execution fails and the flow will exit.


### Variables

| Variable | Description | Type | Example |
| :---: | :---: | :---: | :---: |
| NoNvidia | The disables NVIDIA hardware encoding/decoding | boolean | true |
| NoQSV | The disables Intel Quicksync Video hardware encoding/decoding | boolean | true |
| NoAMD | The disables AMD/AMF hardware encoding/decoding | boolean | true |
| NoVAAPI | The disables VAAPI hardware encoding/decoding | boolean | true |

