---
title: Video Nodes > Video Extract Audio
permalink: /plugins/video-nodes/video-extract-audio
name: Video Extract Audio
layout: default
plugin: Video Nodes
---

{% include node.html outputs=2 icon="fas fa-file-audio" name="Video Extract Audio type="Input" %}

Extracts audio from a video file and saves it to a file

### Output File
Where to save the the output file to, e.g. "{folder.Orig.FullName}\{file.Orig.FileName}.mp3" to save it with the original file as a mp3 output.
If no extension is set, the output codec will be used to determine the extension.

### Set as Working File
When this is checked, if a subtitle is extracted, the working file will be changed to this extracted subtitle.  The original working file will NOT be deleted.

### Output Codec
The codec to save the extract audio in

### Output Bitrate
The bitrate of the extracted audio track

### Title
A regular expression used to test the stream title

### Codec
A regular expression used to test the stream codec

### Language
A regular expression used to test the stream language

### Channels
The number of channels the source track must be in to match.  Set to 0 to skip a channels match.

### Not Matching
If an audio track NOT matching the pattern should be extracted

## Variables

| Variable | Description | Type | Example |
| :---: | :---: | :---: | :---: |
| ExtractedAudioFile | The full path of the extract audio file | string | /mnt/audio/extracted.mp3 |


