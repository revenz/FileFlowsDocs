---
title: Video Nodes > Video File
permalink: /plugins/video-nodes/video-file
name: Video File
layout: default
plugin: Video Nodes
---

{% include node.html outputs=1 icon="fas fa-video" name="Video File" type="Input" %}

Video File is an input node which will scan a file as its discovered by the library scanner and load the Video Information (codecs/tracks etc) for processing in the flow.

## Variables

| Variable | Description | Type | Example |
| :---: | :---: | :---: | :---: |
| vi.VideoInfo | VideoInfo object | object | See Below |
| vi.Width | Width of video | number | 1920 |
| vi.Height | Height of video | number | 1080 |
| vi.Duration | Duration of video in seconds | number | 60 |
| vi.Video.Codec | Codec of video | string | hevc |
| vi.Audio.Codec | Codec of audio | string | eac3 |
| vi.Audio.Channels | Number of audio channels of first audio track | number | 5.1 |
| vi.Audio.Language | Language of audio of first audio track | string | en |
| vi.Audio.Codecs | List of all audio of audio tracks | string | eac3, ac3, aac, dts |
| vi.Audio.Languages | List of all of audio track languages | string | en, deu, mao |
| vi.Resolution | Computed resolution of file (4K, 1080p, 720p, 480p, SD) | string | 4K |


## VideoInfo Object

```ts 
class VideoInfo
{
    FileName:string
    Bitrate:number
    VideoStreams:VideoStream[]
    AudioStreams:AudioStream[]
    SubtitleStreams:SubtitleStream[]
    Chapters:Chapter[]
}

class VideoFileStream
{
    Index:number
    TypeIndex:number
    Title:string;
    Bitrate:number
    Codec:string;
    IsImage:bool
    IndexString:string;
    HDR:bool;
    InputFileIndex:number;
}

class VideoStream : VideoFileStream
{
    Width:number
    Height:number
    FramesPerSecond:number;
    Duration:number
}

class AudioStream : VideoFileStream
{
    Language:string
    Channels:number
    Duration:number
    SampleRate:number
}

class SubtitleStream : VideoFileStream
{
    Language:string
    Forced:bool
}

class Chapter
{
    Title:string
    Start:number
    End:number
}
```