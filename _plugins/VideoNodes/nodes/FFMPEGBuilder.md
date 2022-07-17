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
| FfmpegBuilderModel | The FFMPEG Builder model| object | see below |


### FfmpegBuilderModel Object
This object is the what the FFMPEG Builder uses to process a video.

It has Video, Audio and Subtitle streams available to it.

```ts
// The video streams of the file
VideoStreams:FfmpegVideoStream[]
// The audio streams of the file
AudioStreams:FfmpegAudioStream[]
// The subtitle streams of the file
SubtitleStreams:FfmpegSubtitleStream[]
// Any metadata parameters to process
MetadataParameters:string[]
// The extension of the output file
Extension:string
// The input files
InputFiles:string[]
// Any custom parameters to add to the executor
CustomParameters:string[]
// If this should be forced encoded even if no changes are detected
ForceEncode:bool
// the original VideoInfo the FFMPEG Builder Start used to construct this model
VideoInfo:VideoInfo
```

{% include VideoFile.html %}

### FFmpegStream
This is the common base class for each stream type
```ts
// If this stream should be removed from the output
Deleted: bool
// The overall index of the stream
Index: number
// The title of the stream
Title: string
// The language of the stream
Language: string
// If true this stream changes will be forced
ForcedChange: bool
```

### FfmpegVideoStream : FfmpegStream
This is a Video stream of the FfmpegBuilderModel, subclass of FfmpegStream

```ts
// The original VideoStream from VideoInfo 
Stream:VideoStream
// Any filters to be applied to the video, if set will force a change
Filters:string[]
// Any optional filters that should only be applied if a change is detected
OptionalFilter:string[]
// The encoding parameters of the video
EncodingParameters:string[]
// Any optional encoding parameters tha will only be used if there is encoding parameters etc
OptionalEncodingParameters:string[]
// Any additional parameters to be applied to this stream
AdditionalParameters:string[]
```

### FfmpegAudioStream : FfmpegStream
This is a audio stream of the FfmpegBuilderModel, subclass of FfmpegStream

```ts
// The original AudioStream from VideoInfo 
Stream:AudioStream
// Any filters to be applied to the audio, if set will force a change
Filters:string[]
// The encoding parameters of the audio
EncodingParameters:string[]
```

### FfmpegSubtitleStream : FfmpegStream
This is a subtitle stream of the FfmpegBuilderModel, subclass of FfmpegStream

```ts
// The original AudioStream from VideoInfo 
Stream:SubtitleStream
```

### Example Function
This example function will disable all subtitle and all but the very first Audio track
```js
for(let i=1;i<Variables?.FfmpegBuilderModel?.AudioStreams?.length;i++)
{
	let as = Variables.FfmpegBuilderModel.AudioStreams[i];
	as.Deleted = true;
}
for(let i=0;i<Variables?.FfmpegBuilderModel?.SubtitleStreams?.length;i++)
{
	let sub = Variables.FfmpegBuilderModel.SubtitleStreams[i];
	sub.Deleted = true;
}

return 1;
```