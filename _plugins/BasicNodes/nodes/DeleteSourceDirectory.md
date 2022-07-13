---
name: Delete Source Directory
title: Delete Source Directory
permalink: /plugins/basic-nodes/delete-source-directory
layout: default
plugin: Basic Nodes
toc: true
---

{% include node.html input=1 outputs=2 icon="far fa-trash-alt" name="Delete Source Directory" type="Process" %}

Deletes the source folder of the original library file.

### If Empty
Only delete the source folder if the it is empty.

### Include Patterns
Optional, if set only files matching these patterns will be counted to see if the folder is empty.   Any of these patterns can match

## Example
If working with video files, you may want to delete the source directory only if there are no other video files to process.
There maybe some files left in the directory that you do not wish to keep, eg a "nfo" file.
So you could set the "Include Patterns" to "^((?!sample).)*\.(mkv|mp4|avi|divx|mov|mp(e)?g)$"
This will delete the source directory if no mkv, mp4, avi, divx, mov, or mpeg files are found.
If a file with the word "sample" in it is detected, then that file will be ignored and can be deleted.

## Outputs
1. Source directory deleted
2. Directory was NOT deleted