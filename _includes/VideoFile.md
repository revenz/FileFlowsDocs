### VideoInfo Object

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