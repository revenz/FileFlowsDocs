---
title: Flow Editor
name: Flow Editor
permalink: /flow-editor
layout: default
order: 133
---

This is the page where you can create a Flow for file processing.

A flow must contain one Input node which is the entry point of the flow.

## Creating a Flow

1. The most important part of a Flow is the Input.  
   This is where a Flow will start processing.  
   All flows require one Input.   A Input node will have no inputs and one output.   eg. "Input File" and "Video File"
2. Once a Input node is added, add nodes as you see fit.   Each node is described on the plugins page.
3. Double click a node to edit the configuration of a node and to see some help describing what the node does.
4. Outputs.  Outputs of a node are called depending on what happened in the node.  Generally (not always) output 1 is called if the node did some processing, output 2 if the node did not need to do any processing.
5. To connect nodes up click and drag form an node output to another nodes input.  A line will then be drawn connecting the nodes.  This is the path the flow will take when executing.
6. Each output can only have one connection.  
7. Each input can have multiple connections.


## Example
![image](https://user-images.githubusercontent.com/958400/142720537-df9341ea-c11d-432e-bd1c-07ae4ef3b43d.png)
This example shows
1. Video File input node
2. The video is checked for black bars
3. Either it detected black bars (output 1) or it did not (output2), both connect to the next step of encoding into H265/AC3
   If black bars were detected they will be removed in this step
4. Either the video was rencoding (output 1) or it was not (output 2)
5. Either encoding the file will be moved to another location
6. Delete the original directory 

This flow is a example of a file download that will download to a directory, this flow will process those files, and ensure they are H265/AC3 and black bars are removed, then move the files to another directory for another application to process.

Eg. sabnzbd could download to a "completed" directory, FileFlows would convert video files from this directory into "converted".  sonarr/radarr will then scan the "converted" directory for videos downloaded.